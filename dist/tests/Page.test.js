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
    global.PageTest = mod.exports;
  }
})(this, function (_chai, _) {
  "use strict";

  var _this = void 0;

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  describe("Page class", function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    it("ModelName exists", function () {
      _newArrowCheck(this, _this2);

      (0, _chai.expect)(_.Page.ModelName).to.equal("Page");
    }.bind(this));
    describe("Constructor", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      it("Parse JSON", function () {
        _newArrowCheck(this, _this3);

        var page = new _.Page("{\n\t\t\t\t\"data\": \"NOT HTML\",\n\t\t\t\t\"metadata\": \"Test\",\n\t\t\t\t\"title\": \"This is a test\",\n\t\t\t\t\"link\": \"/\",\n\t\t\t\t\"visits\": 0,\n\t\t\t\t\"revisions\": 0,\n\t\t\t\t\"hide\": false,\n\t\t\t\t\"blog\": false,\n\t\t\t\t\"doc\": false\n\t\t\t}");
        (0, _chai.expect)(page.data).to.equal("NOT HTML");
        (0, _chai.expect)(page.metadata).to.equal("Test");
        (0, _chai.expect)(page.title).to.equal("This is a test");
        (0, _chai.expect)(page.link).to.equal("/");
        (0, _chai.expect)(page.visits).to.equal(0);
        (0, _chai.expect)(page.revisions).to.equal(0);
        (0, _chai.expect)(page.hide).to.equal(false);
        (0, _chai.expect)(page.blog).to.equal(false);
        (0, _chai.expect)(page.doc).to.equal(false);
      }.bind(this));
      it("Empty", function () {
        _newArrowCheck(this, _this3);

        var page = new _.Page({});
        (0, _chai.expect)(page.data).to.equal(null);
        (0, _chai.expect)(page.metadata).to.equal(null);
        (0, _chai.expect)(page.title).to.equal(null);
        (0, _chai.expect)(page.link).to.equal(null);
        (0, _chai.expect)(page.visits).to.equal(0);
        (0, _chai.expect)(page.revisions).to.equal(0);
        (0, _chai.expect)(page.hide).to.equal(true);
        (0, _chai.expect)(page.blog).to.equal(false);
        (0, _chai.expect)(page.doc).to.equal(false);
      }.bind(this));
      it("Copy Data", function () {
        _newArrowCheck(this, _this3);

        var page = new _.Page({
          data: "NOT HTML",
          metadata: "Test",
          title: "This is a test",
          link: "/",
          visits: 0,
          revisions: 0,
          hide: false,
          blog: false,
          doc: false
        });
        (0, _chai.expect)(page.data).to.equal("NOT HTML");
        (0, _chai.expect)(page.metadata).to.equal("Test");
        (0, _chai.expect)(page.title).to.equal("This is a test");
        (0, _chai.expect)(page.link).to.equal("/");
        (0, _chai.expect)(page.visits).to.equal(0);
        (0, _chai.expect)(page.revisions).to.equal(0);
        (0, _chai.expect)(page.hide).to.equal(false);
        (0, _chai.expect)(page.blog).to.equal(false);
        (0, _chai.expect)(page.doc).to.equal(false);
      }.bind(this));
    }.bind(this));
  }.bind(void 0));
});