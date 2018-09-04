const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const onStartCallback = () => {
  // do something when encoding start
  console.log('encoding start');
};
const onErrorCallback = (e) => {
  // do something when error occured
  console.log('encoding error', e);
};
const onEndCallback = () => {
  // do something when stream ends and encoding finshes
  console.log('encoding finsh');
};
ffmpeg('./source/demo.mp4', { timeout: 432000 })
  .addOptions([
    '-profile:v baseline', // baseline profile (level 3.0) for H264 video codec
    '-level 3.0',
    '-start_number 0',     // start the first .ts segment at index 0
    '-hls_time 10',        // 10 second segment duration
    '-hls_list_size 0',    // Maxmimum number of playlist entries (0 means all entries/infinite)
    '-f hls'               // HLS format
  ])
  .output('./public/videos/output_360p.m3u8')
  .videoBitrate(1000)
  .size('?x360')
  .aspect('16:9')
  .output('./public/videos/output_480p.m3u8')
  .size('?x480')
  .output('./public/videos/output_720p.m3u8')
  .size('?x720')
  .on('start', onStartCallback)
  .on('error', onErrorCallback)
  .on('end', onEndCallback)
  .run();
