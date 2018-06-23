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
    global.Conversation = mod.exports;
  }
})(this, function (_exports, _propTypes) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);

  var _default = _propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    dateCreated: _propTypes.default.object.isRequired,
    dateModified: _propTypes.default.object.isRequired,
    users: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
    events: _propTypes.default.arrayOf(_propTypes.default.shape({
      user: _propTypes.default.string.isRequired,
      message: _propTypes.default.string.isRequired,
      dateTimePosted: _propTypes.default.string.isRequired
    }))
  });

  _exports.default = _default;
});