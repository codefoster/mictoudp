var dgram = require('dgram');
var server = dgram.createSocket("udp4");
let port = process.argv[2] || 8089;
import { FileWriter } from "wav";

let outputFileStream = new FileWriter(`./${Date.now()}.wav`, {
  sampleRate: 44100,
  channels: 2
});
server.on('listening', () => console.log(`listening on ${port}`));
server.on("message", msg => outputFileStream.write(msg));
server.bind(port);