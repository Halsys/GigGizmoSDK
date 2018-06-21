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
    global.ErrorReport = mod.exports;
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
    userId: _propTypes.default.string.isRequired,
    version: _propTypes.default.string.isRequired,
    stack: _propTypes.default.string.isRequired,
    message: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired,
    fileName: _propTypes.default.string,
    columnNumber: _propTypes.default.number,
    lineNumber: _propTypes.default.number
  });

  _exports.default = _default;
});