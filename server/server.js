const net = require('net');
const osc = require('osc');

const ESP_HOST = 'taptic-haptic-esp8266.local';
const ESP_PORT = 80;
const ESP_SEND_INTERVAL_MS = 1000 / 4; // 60 раз в секунду

const OSC_HOST = '0.0.0.0';
const OSC_PORT = 9001;

const numbers = new Array(8).fill(0);

const client = new net.Socket();

const oscServer = new osc.UDPPort({
    localAddress: OSC_HOST,
    localPort: OSC_PORT,
});

client.connect(ESP_PORT, ESP_HOST, () => {
    console.log(`TCP-server connected to ${ESP_HOST}:${ESP_PORT}`);
    client.setNoDelay(true);
});

client.on('error', (err) => {
    console.error('TCP error:', err.message);
});

oscServer.on("message", (oscMessage) => {

  const regex = /^.*\/sensor(\d+)$/;
  if(!regex.test(oscMessage.address)) {
    return;
  }

  if(oscMessage.args.length !== 1) {
    return;
  }

  const index = oscMessage.address.match(regex)[1]; // sensor index

  if (index > 7 || index < 0) {
    return;
  }

  const value = oscMessage.args[0] * 255 | 0; // 0 - 255

  numbers[index] = value;
  console.log(oscMessage);
  console.log(numbers);
});


oscServer.on("error", (err) => {
  console.error("Error OSC server:", err.message);
});

oscServer.open();

setInterval(() => {
    if (client.writable) {
      console.log('try to send', Buffer.from(numbers));
        client.write(Buffer.from(numbers), (err) => {
            if (err) {
                console.error(`ERROR send numbers ${numbers} -`, err.message);
            } 
            console.log('success sended');
        });
    }
}, ESP_SEND_INTERVAL_MS);
