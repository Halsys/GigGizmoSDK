(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["chai", "../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("chai"), require("../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.chai, global._);
    global.GooglePlaceTest = mod.exports;
  }
})(this, function (_chai, _) {
  "use strict";

  describe("GooglePlace class", function () {
    it("ModelName exists", function () {
      (0, _chai.expect)(_.GooglePlace.ModelName).to.equal("GooglePlace");
    });
    describe("Constructor", function () {
      it("Parse JSON", function () {
        // / Note: Facebook has number id's... or indices?
        var place = new _.GooglePlace("{\n\t\t\t\t\"placeId\": \"Something\",\n\t\t\t\t\"details\": {}\n\t\t\t}");
        (0, _chai.expect)(place.placeId).to.be.a("string");
        (0, _chai.expect)(place.placeId).to.equal("Something");
        (0, _chai.expect)(place.details).to.be.a("object");
        (0, _chai.expect)(place.details).to.deep.equal({});
      });
      it("Empty", function () {
        var empty = new _.GooglePlace({});
        (0, _chai.expect)(empty.placeId).to.equal(null);
        (0, _chai.expect)(empty.details).to.equal(null);
      });
      it("Copy Data", function () {
        var place = new _.GooglePlace({
          placeId: "Something",
          details: {}
        });
        (0, _chai.expect)(place.placeId).to.be.a("string");
        (0, _chai.expect)(place.placeId).to.equal("Something");
        (0, _chai.expect)(place.details).to.be.a("object");
        (0, _chai.expect)(place.details).to.deep.equal({});
      });
    });
  });
});