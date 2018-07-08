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
    global.Location = mod.exports;
  }
})(this, function (_propTypes) {
  "use strict";

  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = _propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    dateCreated: _propTypes.default.object.isRequired,
    dateModified: _propTypes.default.object.isRequired,
    placeId: _propTypes.default.string.isRequired,
    address: _propTypes.default.string.isRequired,
    type: _propTypes.default.string.isRequired,
    point: _propTypes.default.any.isRequired,
    utcOffset: _propTypes.default.number.isRequired
  });
});