[![Dependencies][deps-image]][deps-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][travis-image]][travis-url]

**Precisebar** is a low-level precise text-based progress bar.

Where most text-based progress bars use ascii characters, precisebar takes advantage of widespread unicode support to render sub-character lengths.

![Screenshot](https://github.com/ameliabradley/precisebar/raw/master/precisebar-demo.webp)


## Installation

`yarn install precisebar`

## Usage

**Basic usage:**

```javascript
const bar = require("precisebar");
const progress = 0.3;
const charWidth = 15;
console.log(bar.getProgress(progress, charWidth));
```

**Advanced usage:**

```javascript
const bar = require("precisebar");
const progress = 0.3;
const charWidth = 15;
const foreground = "cyan";
const background = "grey";
console.log(bar.getProgress(progress, charWidth, foreground, background));
```

## License

MIT © 2020 [Amelia](https://github.com/ameliabradley)

[deps-url]: https://david-dm.org/ameliabradley/precisebar
[deps-image]: https://badgen.net/david/dep/ameliabradley/precisebar

[gh-url]: https://github.com/ameliabradley/precisebar
[gh-stars-image]: https://badgen.net/github/stars/ameliabradley/precisebar
[gh-forks-image]: https://badgen.net/github/forks/ameliabradley/precisebar

[travis-url]: https://travis-ci.com/ameliabradley/precisebar
[travis-image]: https://travis-ci.com/ameliabradley/precisebar.svg?branch=master
