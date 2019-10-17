import dgram = require('dgram');
let port = parseInt(process.argv[2]) || 8089;

let client = dgram.createSocket("udp4");
console.log(`I'll send to port ${port}`);
process.stdin.on('data', text => 
    client.send(Buffer.from(text), 0, text.length, port, "localhost")
);