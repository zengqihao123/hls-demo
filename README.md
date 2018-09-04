# hls-demo

## Install

ライブラリのインストール

```
$ yarn install
```

### FFmpegで動画のエンコード＆分割

```
$ yarn ffmpeg
```


### サンプリングページローカルの実行

```
$ yarn start
```

## ディレクトリ構成

```
.
├── src
│   ├── scripts               .. jsディレクトリ
│   │   ├── config.js
│   │   └── index.js
│   ├── styles                .. cssディレクトリ
│   │   └── main.sass
│   └── index.pug
│
├── sample/                   .. 本番、納品用ディレクトリ
├── node_modules/
│
├── index.js
├── ffmpeg.js                 .. ffmpeg処理用JS
│
├── .eslintrc.js
├── .stylelintrc
├── .postcss.config.js
├── .webpack.config.js
├── README.md
└── package.json
```
