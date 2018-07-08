(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes);
    global.Page = mod.exports;
  }
})(this, function (_exports, _propTypes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = _propTypes.default.shape({
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

  _exports.default = _default;
});