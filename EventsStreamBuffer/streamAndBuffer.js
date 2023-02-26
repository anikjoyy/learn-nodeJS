const fs = require('fs');

const readStream = fs.createReadStream('./data.txt');

readStream.on('data', (chunk) => {
  console.log('.........................');
  console.log(chunk);
});

readStream.on('open', () => {
  console.log('Stream is open');
});

setTimeout(() => {
  readStream.pause('pause');
  console.log('paused');
}, 1000);

setTimeout(() => {
  readStream.resume('resume');
  console.log('resumed');
}, 10000);
