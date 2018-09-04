import 'video.js/dist/video-js.css';
import '../styles/main.scss';
import videojs from 'video.js';
import 'videojs-contrib-hls';
import { DEFAULT_OPTIONS } from './config';

const player = videojs('js-demo-video', DEFAULT_OPTIONS);
player.src('../videos/output_360p.m3u8');
