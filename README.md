[![Dependencies][deps-image]][deps-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][travis-image]][travis-url]

**precisebar** is a low-level precise text-based progress bar for use in command-line applications.

<img src="https://github.com/leebradley/precisebar/raw/master/showoff2.gif" alt="demo" width="439"/>

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

MIT © 2020 [Lee Bradley](https://github.com/leebradley)

[deps-url]: https://david-dm.org/leebradley/precisebar
[deps-image]: https://badgen.net/david/dep/leebradley/precisebar

[gh-url]: https://github.com/leebradley/precisebar
[gh-stars-image]: https://badgen.net/github/stars/leebradley/precisebar
[gh-forks-image]: https://badgen.net/github/forks/leebradley/precisebar

[travis-url]: https://travis-ci.com/leebradley/precisebar
[travis-image]: https://travis-ci.com/leebradley/precisebar.svg?branch=master
