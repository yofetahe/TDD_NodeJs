const assert = require("chai").assert;
const app = require("../app");

//Results
sayHelloResults = app.sayHello();
addNumberResults = app.addNumbers(5, 5);

describe("App", function() {
  describe("Say Hello", function() {
    it("app should return hello", function() {
      assert.equal(sayHelloResults, "Hello");
    });

    it("sayHello should return type string", function() {
      assert.typeOf(sayHelloResults, "string");
    });
  });

  describe("Add Number", function() {
    it("addNumber should return above 5", function() {
      assert.isAbove(addNumberResults, 5);
    });

    it("addNumber should return type number", function() {
      assert.typeOf(addNumberResults, "number");
    });
  });
});
