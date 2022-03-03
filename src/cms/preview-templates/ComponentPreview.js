import React from "react";
import PropTypes from "prop-types";
import { ComponentTemplate } from "../../templates/component-post";

const ComponentPreview = ({ entry, widgetFor }) => {
	const tags = entry.getIn(["data", "tags"]);
	return <ComponentTemplate content={widgetFor("body")} description={entry.getIn(["data", "description"])} tags={tags && tags.toJS()} title={entry.getIn(["data", "title"])} />;
};

ComponentPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default ComponentPreview;
