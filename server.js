const express = require('express');
const NodeMediaServer = require('node-media-server');
const path = require('path');

const app = express();
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

app.use('/audio', express.static(path.join(__dirname, 'audio')));

const nms = new NodeMediaServer(config);
nms.run();

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
