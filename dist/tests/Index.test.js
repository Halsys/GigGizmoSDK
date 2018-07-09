"use strict";

var _chai = require("chai");

var _index = require("../index");

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

describe("ModelNameToModel", function () {
  var _this2 = this;

  _newArrowCheck(this, _this);

  it("Null", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)();
    (0, _chai.expect)(Model).to.equal(null);
  }.bind(this));
  it("Band", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Band");
    (0, _chai.expect)(Model).to.equal(_index.Band);
  }.bind(this));
  it("Conversation", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Conversation");
    (0, _chai.expect)(Model).to.equal(_index.Conversation);
  }.bind(this));
  it("ErrorReport", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("ErrorReport");
    (0, _chai.expect)(Model).to.equal(_index.ErrorReport);
  }.bind(this));
  it("FacebookAccount", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("FacebookAccount");
    (0, _chai.expect)(Model).to.equal(_index.FacebookAccount);
  }.bind(this));
  it("Gig", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Gig");
    (0, _chai.expect)(Model).to.equal(_index.Gig);
  }.bind(this));
  it("GooglePlace", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("GooglePlace");
    (0, _chai.expect)(Model).to.equal(_index.GooglePlace);
  }.bind(this));
  it("Location", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Location");
    (0, _chai.expect)(Model).to.equal(_index.Location);
  }.bind(this));
  it("Notification", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Notification");
    (0, _chai.expect)(Model).to.equal(_index.Notification);
  }.bind(this));
  it("Page", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Page");
    (0, _chai.expect)(Model).to.equal(_index.Page);
  }.bind(this));
  it("Post", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Post");
    (0, _chai.expect)(Model).to.equal(_index.Post);
  }.bind(this));
  it("Request", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Request");
    (0, _chai.expect)(Model).to.equal(_index.Request);
  }.bind(this));
  it("TwitterAccount", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("TwitterAccount");
    (0, _chai.expect)(Model).to.equal(_index.TwitterAccount);
  }.bind(this));
  it("Upload", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Upload");
    (0, _chai.expect)(Model).to.equal(_index.Upload);
  }.bind(this));
  it("User", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("User");
    (0, _chai.expect)(Model).to.equal(_index.User);
  }.bind(this));
  it("Venue", function () {
    _newArrowCheck(this, _this2);

    var Model = (0, _index.ModelNameToModel)("Venue");
    (0, _chai.expect)(Model).to.equal(_index.Venue);
  }.bind(this));
}.bind(void 0));