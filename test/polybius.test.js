// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should return a string", () => {
    const string = polybius("abcd");
    expect(string).to.be.a("string");
  });

  it("should keep the space", () => {
    const space = polybius("hello world");
    expect(space).to.eql("3251131343 2543241341");
  });

  it("should decode only pairs of numbers given (an even number of numbers)", () => {
    const odd = polybius("44324233521254134", false);
    expect(odd).to.be.false;
  });

  it("should return (i/j) when decoding a message containing pair 42", () => {
    const ijTest = polybius("4432423352125413", false);
    expect(ijTest).to.have.string("(i/j)");
  });
});
