import PropTypes from "prop-types";

export default PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.object.isRequired,
	dateModified: PropTypes.object.isRequired,
	data: PropTypes.string,
	metadata: PropTypes.string,
	title: PropTypes.string,
	link: PropTypes.string,
	visits: PropTypes.number,
	revisions: PropTypes.number,
	hide: PropTypes.bool,
	blog: PropTypes.bool,
	doc: PropTypes.bool
});
