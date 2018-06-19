"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require("babel-runtime/helpers/get");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _User = require("./User");

var _User2 = _interopRequireDefault(_User);

var _Upload = require("./Upload");

var _Upload2 = _interopRequireDefault(_Upload);

var _Gig = require("./Gig");

var _Gig2 = _interopRequireDefault(_Gig);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

var _TwitterAccount = require("./TwitterAccount");

var _TwitterAccount2 = _interopRequireDefault(_TwitterAccount);

var _FacebookAccount = require("./FacebookAccount");

var _FacebookAccount2 = _interopRequireDefault(_FacebookAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by corynull on 4/3/17.
 */

var Band = function (_RESTModel) {
	(0, _inherits3.default)(Band, _RESTModel);

	function Band() {
		(0, _classCallCheck3.default)(this, Band);
		return (0, _possibleConstructorReturn3.default)(this, (Band.__proto__ || Object.getPrototypeOf(Band)).apply(this, arguments));
	}

	(0, _createClass3.default)(Band, [{
		key: "save",
		value: function save(token) {
			return _RESTModel3.default.prototype.save.call(this, token, true);
		}
	}, {
		key: "remove",
		value: function remove(token) {
			return _RESTModel3.default.prototype.remove.call(this, token, true);
		}
	}, {
		key: "getIcon",
		value: function getIcon(token) {
			return _Upload2.default.findById(this.icon, token);
		}
	}, {
		key: "getPhotos",
		value: function getPhotos(token) {
			var photos = Array.from(this.photos);
			if (photos.length !== 0) return _Upload2.default.findMany({
				_id: photos
			}, token);
			return Promise.resolve([]);
		}
	}, {
		key: "getOwners",
		value: function getOwners(token) {
			var owners = Array.from(this.owners);
			if (owners.length !== 0) return _User2.default.findMany({
				_id: owners
			}, token);
			return Promise.resolve([]);
		}
	}, {
		key: "getGigs",
		value: function getGigs(token) {
			return _Gig2.default.findByBand(this._id, token);
		}
	}, {
		key: "getTwitterAccount",
		value: function getTwitterAccount(token) {
			return _TwitterAccount2.default.findById(this.twitter, token);
		}
	}, {
		key: "getFacebookAccount",
		value: function getFacebookAccount(token) {
			return _FacebookAccount2.default.findById(this.facebook, token);
		}
	}, {
		key: "valid",
		value: function valid() {
			if (!(0, _get3.default)(Band.prototype.__proto__ || Object.getPrototypeOf(Band.prototype), "valid", this).call(this)) return false;

			if (typeof this.cityPlaceID !== "string") return false;
			if (this.cityPlaceID === "") return false;

			if (typeof this.name !== "string") return false;
			if (this.name === "") return false;

			if (typeof this.description !== "string") return false;
			if (this.description === "") return false;
			if (this.description === "<p><br></p>") return false;

			if (!Array.isArray(this.owners)) return false;
			if (this.owners.length === 0) return false;

			return true;
		}
	}, {
		key: "userIsOwner",
		value: function userIsOwner(user) {
			if (Array.isArray(this.owners)) {
				var userId = null;
				if (typeof user === "string") userId = user;else if ((typeof user === "undefined" ? "undefined" : (0, _typeof3.default)(user)) === "object" && user) userId = user._id;
				return this.owners.find(function (id) {
					return id === userId;
				}) !== undefined;
			}
			return false;
		}
	}, {
		key: "name",
		get: function get() {
			return this.getField("name");
		},
		set: function set(value) {
			this.setField("name", value);
		}
	}, {
		key: "website",
		get: function get() {
			return this.getField("website");
		},
		set: function set(value) {
			this.setField("website", value);
		}
	}, {
		key: "email",
		get: function get() {
			return this.getField("email");
		},
		set: function set(value) {
			this.setField("email", value);
		}
	}, {
		key: "cityName",
		get: function get() {
			return this.getField("cityName");
		},
		set: function set(value) {
			this.setField("cityName", value);
		}
	}, {
		key: "cityPlaceID",
		get: function get() {
			return this.getField("cityPlaceID");
		},
		set: function set(value) {
			this.setField("cityPlaceID", value);
		}
	}, {
		key: "description",
		get: function get() {
			return this.getField("description");
		},
		set: function set(value) {
			this.setField("description", value);
		}
	}, {
		key: "metadata",
		get: function get() {
			return this.getField("metadata");
		},
		set: function set(value) {
			this.setField("metadata", value);
		}
	}, {
		key: "icon",
		get: function get() {
			return this.getField("icon");
		},
		set: function set(value) {
			this.setField("icon", value);
		}
	}, {
		key: "photos",
		get: function get() {
			return this.getField("photos");
		},
		set: function set(value) {
			this.setField("photos", value);
		}
	}, {
		key: "owners",
		get: function get() {
			return this.getField("owners");
		},
		set: function set(value) {
			this.setField("owners", value);
		}
	}, {
		key: "facebook",
		get: function get() {
			return this.getField("facebook");
		},
		set: function set(value) {
			this.setField("facebook", value);
		}
	}, {
		key: "facebookPageId",
		get: function get() {
			return this.getField("facebookPageId");
		},
		set: function set(value) {
			this.setField("facebookPageId", value);
		}
	}, {
		key: "facebookPageName",
		get: function get() {
			return this.getField("facebookPageName");
		},
		set: function set(value) {
			this.setField("facebookPageName", value);
		}
	}, {
		key: "facebookPageToken",
		get: function get() {
			return this.getField("facebookPageToken");
		},
		set: function set(value) {
			this.setField("facebookPageToken", value);
		}
	}, {
		key: "twitter",
		get: function get() {
			return this.getField("twitter");
		},
		set: function set(value) {
			this.setField("twitter", value);
		}
	}, {
		key: "google",
		get: function get() {
			return this.getField("google");
		},
		set: function set(value) {
			this.setField("google", value);
		}
	}], [{
		key: "findOne",
		value: function findOne(criteria, token) {
			return _RESTModel3.default.findOne(Band, criteria, token, true);
		}
	}, {
		key: "findMany",
		value: function findMany(criteria, token) {
			return _RESTModel3.default.findMany(Band, criteria, token, true);
		}
	}, {
		key: "findById",
		value: function findById(id, token) {
			return _RESTModel3.default.findById(Band, id, token, true);
		}
	}, {
		key: "getAllOwned",
		value: function getAllOwned(token) {
			return _RESTModel3.default.findMany(Band, null, token, true);
		}
	}]);
	return Band;
}(_RESTModel3.default);

Band.ModelName = "Band";
exports.default = Band;