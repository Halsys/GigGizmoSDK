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
    global.Conversation = mod.exports;
  }
})(this, function (_propTypes) {
  "use strict";

  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = _propTypes.default.shape({
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
});