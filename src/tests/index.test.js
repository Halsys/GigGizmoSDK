const { expect } = require("chai");

const GigGizmoSDK = require("../../dist/bundle.js");

describe("Isomorphic", () => {
  it("Export not null", () => {
    expect(GigGizmoSDK).to.not.equal(null);
  });
  it("Global not null", () => {
    expect(global.GigGizmoSDK).to.not.equal(null);
  });
});
