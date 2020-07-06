const bar = require("./index");
const assert = require("assert");

describe("Test bar results", () => {
  it("getBlocks should return the correct blocks", () => {
    assert.equal(bar.getBlocks(0.8, 10), "█".repeat(8));
    assert.equal(bar.getBlocks(0.1, 3), "▎");
  });

  it("getProgress should return the correct progress bar", () => {
    assert.equal(
      bar.getProgress(0.8, 10),
      "\x1B[38;2;255;255;255m\x1B[48;2;128;128;128m████████  \x1B[49m\x1B[39m"
    );
    assert.equal(
      bar.getProgress(0.3, 15),
      "\x1B[38;2;255;255;255m\x1B[48;2;128;128;128m████▌          \x1B[49m\x1B[39m"
    );
  });

  it("getProgress should pass colors to chalk", () => {
    assert.equal(
      bar.getProgress(0.8, 10, "red", "blue"),
      "\x1B[38;2;255;0;0m\x1B[48;2;0;0;255m████████  \x1B[49m\x1B[39m"
    );
  });
});
