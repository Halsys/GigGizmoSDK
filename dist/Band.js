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
			return this.document.name || null;
		},
		set: function set(value) {
			this.document.name = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "website",
		get: function get() {
			return this.document.website || null;
		},
		set: function set(value) {
			this.document.website = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "email",
		get: function get() {
			return this.document.email || null;
		},
		set: function set(value) {
			this.document.email = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "cityName",
		get: function get() {
			return this.document.cityName || null;
		},
		set: function set(value) {
			this.document.cityName = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "cityPlaceID",
		get: function get() {
			return this.document.cityPlaceID || null;
		},
		set: function set(value) {
			this.document.cityPlaceID = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "description",
		get: function get() {
			return this.document.description || null;
		},
		set: function set(value) {
			this.document.description = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "metadata",
		get: function get() {
			return this.document.metadata || null;
		},
		set: function set(value) {
			this.document.metadata = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "icon",
		get: function get() {
			return this.document.icon || null;
		},
		set: function set(value) {
			this.document.icon = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "photos",
		get: function get() {
			return this.document.photos || [];
		},
		set: function set(value) {
			this.document.photos = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "owners",
		get: function get() {
			return this.document.owners || [];
		},
		set: function set(value) {
			this.document.owners = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "facebook",
		get: function get() {
			return this.document.facebook || null;
		},
		set: function set(value) {
			this.document.facebook = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "facebookPageId",
		get: function get() {
			return this.document.facebookPageId || null;
		},
		set: function set(value) {
			this.document.facebookPageId = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "facebookPageName",
		get: function get() {
			return this.document.facebookPageName || null;
		},
		set: function set(value) {
			this.document.facebookPageName = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "facebookPageToken",
		get: function get() {
			return this.document.facebookPageToken || null;
		},
		set: function set(value) {
			this.document.facebookPageToken = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "twitter",
		get: function get() {
			return this.document.twitter || null;
		},
		set: function set(value) {
			this.document.twitter = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "google",
		get: function get() {
			return this.document.google || null;
		},
		set: function set(value) {
			this.document.google = value;
			this.document.dateModified = Date.now();
		}
	}], [{
		key: "findOne",
		value: function findOne(criteria, token) {
			return _RESTModel3.default.findOne(Band, criteria, token);
		}
	}, {
		key: "findMany",
		value: function findMany(criteria, token) {
			return _RESTModel3.default.findMany(Band, criteria, token);
		}
	}, {
		key: "findById",
		value: function findById(id, token) {
			return _RESTModel3.default.findById(Band, id, token);
		}
	}, {
		key: "getAllOwned",
		value: function getAllOwned(token) {
			return _RESTModel3.default.findMany(Band, null, token);
		}
	}]);
	return Band;
}(_RESTModel3.default);

Band.ModelName = "Band";
exports.default = Band;