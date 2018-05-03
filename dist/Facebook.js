"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Facebook = function () {
	function Facebook() {
		(0, _classCallCheck3.default)(this, Facebook);
	}

	(0, _createClass3.default)(Facebook, null, [{
		key: "FindPage",
		value: function FindPage(pageName) {
			return new Promise(function (resolve, reject) {
				if (typeof pageName !== "string") {
					reject(new Error("pageName is not a string!"));
				} else {
					_API2.default.Call("GET", "/API/Facebook/Page/Find", { name: pageName }).then(resolve, reject);
				}
			});
		}
	}, {
		key: "PostToPage",
		value: function PostToPage(format, text, pageId, postDateTime) {
			return new Promise(function (resolve, reject) {
				_API2.default.Call("POST", "/API/Facebook/Page/Post", {
					post_format: format,
					post_text: text,
					fb_page_id: pageId,
					publish_time: postDateTime // .getTime() / 1000
				}).then(resolve, reject);
			});
		}
	}]);
	return Facebook;
}(); /**
      * Created by corynull on 4/23/17.
      */

exports.default = Facebook;