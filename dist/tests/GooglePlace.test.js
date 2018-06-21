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

  var _this = void 0;

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  describe("GooglePlace class", function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    it("ModelName exists", function () {
      _newArrowCheck(this, _this2);

      (0, _chai.expect)(_.GooglePlace.ModelName).to.equal("GooglePlace");
    }.bind(this));
    describe("Constructor", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      it("Parse JSON", function () {
        _newArrowCheck(this, _this3);

        // / Note: Facebook has number id's... or indices?
        var place = new _.GooglePlace("{\n\t\t\t\t\"placeId\": \"Something\",\n\t\t\t\t\"details\": {}\n\t\t\t}");
        (0, _chai.expect)(place.placeId).to.be.a("string");
        (0, _chai.expect)(place.placeId).to.equal("Something");
        (0, _chai.expect)(place.details).to.be.a("object");
        (0, _chai.expect)(place.details).to.deep.equal({});
      }.bind(this));
      it("Empty", function () {
        _newArrowCheck(this, _this3);

        var empty = new _.GooglePlace({});
        (0, _chai.expect)(empty.placeId).to.equal(null);
        (0, _chai.expect)(empty.details).to.equal(null);
      }.bind(this));
      it("Copy Data", function () {
        _newArrowCheck(this, _this3);

        var place = new _.GooglePlace({
          placeId: "Something",
          details: {}
        });
        (0, _chai.expect)(place.placeId).to.be.a("string");
        (0, _chai.expect)(place.placeId).to.equal("Something");
        (0, _chai.expect)(place.details).to.be.a("object");
        (0, _chai.expect)(place.details).to.deep.equal({});
      }.bind(this));
    }.bind(this));
  }.bind(void 0));
});