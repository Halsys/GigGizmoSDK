import * as PropTypes from "prop-types";

export default PropTypes.shape({
	_id: PropTypes.string.isRequired,
	blog: PropTypes.bool,
	data: PropTypes.string,
	dateCreated: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	dateModified: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	doc: PropTypes.bool,
	hide: PropTypes.bool,
	link: PropTypes.string,
	metadata: PropTypes.string,
	revisions: PropTypes.number,
	title: PropTypes.string,
	visits: PropTypes.number
});
