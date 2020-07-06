[![Dependencies][deps-image]][deps-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][travis-image]][travis-url]

**precisebar** is a low-level precise text-based progress bar for use in command-line applications.

<img src="https://github.com/ameliabradley/precisebar/raw/master/showoff2.gif" alt="demo" width="439"/>

Where most text-based progress bars use ascii characters, precisebar takes advantage of widespread unicode support to render sub-character lengths.


## Why use precisebar?

* precisebar allows for smaller progress bars
* precisebar allows for highly precise progress information
* precisebar only has one dependency, chalk

## Installation

`yarn install precisebar`

## Usage

**Basic usage:**

```javascript
const bar = require("precisebar");
const progress = 0.3; // Any number 0-1
const charWidth = 15; // Any integer value
console.log(bar.getProgress(progress, charWidth));
```

**Advanced usage:**

```javascript
const bar = require("precisebar");
const progress = 0.3;
const charWidth = 15;
const beginningColor = "cyan";
const endColor = "bgGrey";
console.log(bar.getProgress(progress, charWidth, beginningColor, endColor));
```

**Valid beginning colors:**

* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
* blackBright (alias: gray, grey)
* redBright
* greenBright
* yellowBright
* blueBright
* magentaBright
* cyanBright
* whiteBright
* Any RGB array (ex: [255, 105, 180])

**Valid end colors:**

* bgBlack
* bgRed
* bgGreen
* bgYellow
* bgBlue
* bgMagenta
* bgCyan
* bgWhite
* bgBlackBright (alias: bgGray, bgGrey)
* bgRedBright
* bgGreenBright
* bgYellowBright
* bgBlueBright
* bgMagentaBright
* bgCyanBright
* bgWhiteBright
* Any RGB array (ex: [248, 248, 255])

## License

MIT © 2020 [Amelia](https://github.com/ameliabradley)

[deps-url]: https://david-dm.org/ameliabradley/precisebar
[deps-image]: https://badgen.net/david/dep/ameliabradley/precisebar

[gh-url]: https://github.com/ameliabradley/precisebar
[gh-stars-image]: https://badgen.net/github/stars/ameliabradley/precisebar
[gh-forks-image]: https://badgen.net/github/forks/ameliabradley/precisebar

[travis-url]: https://travis-ci.com/ameliabradley/precisebar
[travis-image]: https://travis-ci.com/ameliabradley/precisebar.svg?branch=master
