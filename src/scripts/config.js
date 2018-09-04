export const DEFAULT_OPTIONS = {
  autoplay: true,
  controls: true,
  muted: false,
  width: 480,
  nativeControlsForTouch: false,
  controlBar: {
    volumeMenuButton: true,
    currentTimeDisplay: true,
    remainingTimeDisplay: true,
    volumePanel: {
      inline: true
    }
  }
};

export const MUTED_OPTIONS = {
  autoplay: true,
  controls: true,
  muted: true,
  width: 480,
  nativeControlsForTouch: false,
  controlBar: {
    volumeMenuButton: true,
    currentTimeDisplay: true,
    remainingTimeDisplay: true,
    volumePanel: {
      inline: true
    }
  }
};

export const PLAY_LIST = [
  {
    sources: [{
      src: 'http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
  },
  {
    sources: [{
      src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
  },
  {
    sources: [{
      src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      type: 'application/x-mpegURL'
    }],
  }
];
