const net = require('net');

const HOST = 'esp8266.local'; // nDNS (or ip) ESP8266 of esp
const PORT = 80;

//create TCP client
const client = new net.Socket();

const getVoltage = ((num) => ((num / 255) * 3.20).toFixed(2));

client.connect(PORT, HOST, () => {
  console.log(`Connected to ${HOST}:${PORT}`);
  //disable cache of packages
  client.setNoDelay(true);

  setInterval(() => {
    const millis = Date.now();
    // convert millis to 16-number
    const data = Buffer.alloc(8); 
    data.writeBigUInt64LE(BigInt(millis));  // write in buffer

    // send data type of <12 34 56 78 90 AB CD EF>
    client.write(data);
    console.log('Data sent:', data);
    console.log('Voltage: ', getVoltage(data[0]));
}, 500);
  console.log('sended!');


  setTimeout(() => {

    client.end();
    console.log('connection closed');
  }, 100000);
});

// error handler
client.on('error', (err) => {
  console.error('Error:', err.message);
});

// close handler
client.on('close', () => {
  console.log('Connection closed');
});
