(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.propTypes);
    global.Post = mod.exports;
  }
})(this, function (_propTypes) {
  "use strict";

  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = _propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    dateCreated: _propTypes.default.object.isRequired,
    dateModified: _propTypes.default.object.isRequired,
    userId: _propTypes.default.string.isRequired,
    network: _propTypes.default.string.isRequired,
    accountId: _propTypes.default.string.isRequired,
    pageId: _propTypes.default.string.isRequired,
    postText: _propTypes.default.string.isRequired,
    postDate: _propTypes.default.object.isRequired,
    coordinates: _propTypes.default.arrayOf(_propTypes.default.number),
    // coord = [longitude, latitude]
    error: _propTypes.default.any,
    done: _propTypes.default.bool.isRequired
  });
});