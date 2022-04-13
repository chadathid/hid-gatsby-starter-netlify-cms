import React from "react";
import PropTypes from "prop-types";
import { ComponentTemplate } from "../../templates/component-post";

const ComponentPreview = ({ entry, widgetFor }) => {
	return <ComponentTemplate content={widgetFor("body")} description={entry.getIn(["data", "description"])} title={entry.getIn(["data", "title"])} />;
};

ComponentPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default ComponentPreview;
