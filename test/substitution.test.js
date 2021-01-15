// Write your tests here!
const substitute = require("../src/substitution");
const expect = require("chai").expect;

describe("substitute", () => {
  it("should return false if alphabet key is shorter or longer than 26 letters", () => {
    alphabetLength = substitute("thinkful", "short");
    expect(alphabetLength).to.be.false;
  });
  it("should return false if alphabet key characters are not all unique", () => {
    unique = substitute("thinkful", "AuniqueuniqueuniqueuniqueA");
    expect(unique).to.be.false;
  });
  it("should work with any special characters in the message or alphabet key", () => {
    specialCharacters = substitute(
      "i love to program",
      "*3ilove2prgamUc0D{t81b4569"
    );
    expect(specialCharacters).to.equal("p acbo 8c 0{ce{*m");
  });
  it("should maintain spaces in the message given in the input message", () => {
    spaces = substitute(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(spaces).to.equal("elp xhm xf mbymwwmfj dne");
  });

  it("should decode any message given, keeping any unknown characters the same and maintaining spaces", () => {
    specialDecode = substitute(
      "p acbo 8c 0{ce{*m",
      "*3ilove2prgamUc0D{t81b4569",
      false
    );
    expect(specialDecode).to.equal("i love to program");
  });
});
