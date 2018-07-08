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
    global.Page = mod.exports;
  }
})(this, function (_propTypes) {
  "use strict";

  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = _propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    dateCreated: _propTypes.default.object.isRequired,
    dateModified: _propTypes.default.object.isRequired,
    data: _propTypes.default.string,
    metadata: _propTypes.default.string,
    title: _propTypes.default.string,
    link: _propTypes.default.string,
    visits: _propTypes.default.number,
    revisions: _propTypes.default.number,
    hide: _propTypes.default.bool,
    blog: _propTypes.default.bool,
    doc: _propTypes.default.bool
  });
});