const { expect } = require("chai");
const { Page, User, RESTModel } = require("../../../dist/bundle.js");

describe("Page class", () => {
  it("ModelName exists", () => {
    expect(Page.ModelName).to.equal("Page");
  });

  describe("Constructor", () => {
    it("Parse JSON", () => {
      const page = new Page(`{
				"data": "NOT HTML",
				"metadata": "Test",
				"title": "This is a test",
				"link": "/",
				"visits": 0,
				"revisions": 0,
				"hide": false,
				"blog": false,
				"doc": false
			}`);
      expect(page.data).to.equal("NOT HTML");
      expect(page.metadata).to.equal("Test");
      expect(page.title).to.equal("This is a test");
      expect(page.link).to.equal("/");
      expect(page.visits).to.equal(0);
      expect(page.revisions).to.equal(0);
      expect(page.hide).to.equal(false);
      expect(page.blog).to.equal(false);
      expect(page.doc).to.equal(false);
    });
    it("Empty", () => {
      const page = new Page({});
      expect(page.data).to.equal(null);
      expect(page.metadata).to.equal(null);
      expect(page.title).to.equal(null);
      expect(page.link).to.equal(null);
      expect(page.visits).to.equal(0);
      expect(page.revisions).to.equal(0);
      expect(page.hide).to.equal(true);
      expect(page.blog).to.equal(false);
      expect(page.doc).to.equal(false);
    });
    it("Copy Data", () => {
      const page = new Page({
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
      expect(page.data).to.equal("NOT HTML");
      expect(page.metadata).to.equal("Test");
      expect(page.title).to.equal("This is a test");
      expect(page.link).to.equal("/");
      expect(page.visits).to.equal(0);
      expect(page.revisions).to.equal(0);
      expect(page.hide).to.equal(false);
      expect(page.blog).to.equal(false);
      expect(page.doc).to.equal(false);
    });
  });
});
