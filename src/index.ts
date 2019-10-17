var dgram = require('dgram');
var server = dgram.createSocket("udp4");
let port = process.argv[2] || 8089;

server.on('listening', function () {
  let { address, port } = server.address();
  console.log('UDP Server started and listening on ' + address + ":" + port);
});

server.on("message", msg => console.log(msg));

server.bind(port);