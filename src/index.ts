var dgram = require('dgram');
var socket = dgram.createSocket("udp4");
let port = process.argv[2] || 8089; //npm start <port#>
import { FileWriter } from "wav";

let createFileWriter = () => new FileWriter(`./${Date.now()}.wav`, { sampleRate: 44100, channels: 2 });
let output = createFileWriter();

socket.on('listening', () => console.log(`listening on ${port}`));

// when a byte is received, write it to the output
socket.on("message", msg => output.write(msg));

// every 15 seconds
setInterval(() => {
  // stop the last one
  output.end();

  // and start a new one
  output = createFileWriter();
}, 15000);

socket.bind(port);