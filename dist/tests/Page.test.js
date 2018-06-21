"use strict";

var _chai = require("chai");

var _ = require("../");

describe("Page class", function () {
  it("ModelName exists", function () {
    (0, _chai.expect)(_.Page.ModelName).to.equal("Page");
  });
  describe("Constructor", function () {
    it("Parse JSON", function () {
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
    });
    it("Empty", function () {
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
    });
    it("Copy Data", function () {
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
    });
  });
});