let node =
  global.process != null &&
  typeof global.process.title === "string" &&
  !global.process.title.includes("node");

let GigGizmoSDK: any = null;

if (node) {
  GigGizmoSDK = require("../dist/bundle.server.js");
} else {
  GigGizmoSDK = require("../dist/bundle.client.js");
}

(<any>global).GigGizmoSDK = GigGizmoSDK;

module.exports = GigGizmoSDK;
