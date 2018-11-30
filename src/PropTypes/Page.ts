import * as PropTypes from "prop-types";

export default  PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	dateModified: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
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
