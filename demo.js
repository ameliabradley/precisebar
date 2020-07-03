const bar = require("./index");

// Demo Settings
const demoSpeed = 30;
const totalCharWidth = 40;
const progressSpeed = 0.01;

// Derived const
const demoTotalTime = demoSpeed * (1 / progressSpeed);

function getAsciiProgress(value, length) {
    let chars = Math.ceil(value * length);
    if (chars > length) chars = length;
    return "=".repeat(chars) + " ".repeat(length - chars);
}

var easeInOutQuad = function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
};

function printProgress(progress, length, fn){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${fn(progress)}   `);
}

function runDemo(fn) {
    return new Promise(cb => {
        let progress = 0;
        let time = 0;
        let interval = setInterval(() => {
            progress += 0.01;
            time += demoSpeed;

            let done = easeInOutQuad(progress, time, 0, 1, demoTotalTime);
            printProgress(done, 40, fn);

            if (progress >= 1) {
                clearInterval(interval);
                cb();
            }
        }, demoSpeed);
    });
}

runDemo(progress => {
    return getAsciiProgress(progress, totalCharWidth);
}).then(() => {
    return runDemo(progress => {
        return bar.getProgress(progress, totalCharWidth, "cyan");
    });
}).then(() => {
    console.log('\n\nDONE');
})
