#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>

const char* ssid = "your-wifi-name-2.4g";
const char* password = "password-of-wifi";

// pins                 16, 5,  4,  0,  14, 12, 13, 15
const uint8_t PINS[] = {D0, D1, D2, D3, D5, D6, D7, D8};
const uint8_t PIN_LED = D4;
const int numPins = sizeof(PINS) / sizeof(PINS[0]);

WiFiServer server(80); // port of TCP server

void setup() {
  Serial.begin(115200);
  Serial.println();

  //enable pins
  pinMode(PIN_LED, OUTPUT);
  for (int i = 0; i < numPins; i++) {
    pinMode(PINS[i], OUTPUT);
  }

  // connect to wifi
  Serial.printf("Connecting to %s\n", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    digitalWrite(2, LOW);
    Serial.print(".");
    delay(100);
    digitalWrite(2, HIGH);
  }
  Serial.println("\nWiFi connected");
  Serial.printf("IP address: %s\n", WiFi.localIP().toString().c_str());

  // start MDNS
  if (MDNS.begin("taptic-haptic-esp8266")) {
    Serial.println("MDNS responder started on taptic-haptic-esp8266.local");
  }

  // start server
  server.begin();
  Serial.printf("Server started on port %d\n", server.port());
}

void loop() {
  MDNS.update();

  delay(500);
  digitalWrite(2, HIGH);
  delay(500);
  digitalWrite(2, LOW);

  WiFiClient client = server.accept();
  if (client) {
    digitalWrite(2, LOW);
    Serial.println("New client connected");

    while (client.connected()) {
      if (client.available()) {

        uint8_t buffer[8];
        size_t len = client.read(buffer, sizeof(buffer));

        Serial.print("Received: ");
        for (size_t i = 0; i < len; i++) {
          Serial.printf("%02X ", buffer[i]);
        }

        for (int i = 0; i < numPins; i++) {
          analogWrite(PINS[i], buffer[0]);
        }

        Serial.println();
      }
    }

    client.stop();
    for (int i = 0; i < numPins; i++) {
      analogWrite(PINS[i], LOW);
    }
    Serial.println("Client disconnected");
  }
}