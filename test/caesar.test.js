// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesarModule.caeser", () => {
  it("should be false if shift is out of range or no value passed in message and/or shift", () => {
    const nothingPassed = caesar();
    expect(nothingPassed).to.be.false;
  });
  it("should return a message", () => {
    const message = caesar("abcd e", -1);
    expect(message).to.be.a("string");
  });
  it("should shift the message based on the number given", () => {
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal("wklqnixo");
  });
  it("should decode the message by flipping the switch value when encode is false", () => {
    const decode = caesar("wklqnixo", 3, false);
    expect(decode).to.equal("thinkful");
  });
});
