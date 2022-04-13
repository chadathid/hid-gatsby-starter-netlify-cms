import React from "react";
import PropTypes from "prop-types";
import { WidgetTemplate } from "../../templates/widget-post";

const WidgetPostPreview = ({ entry, widgetFor }) => {
	return <WidgetTemplate content={widgetFor("body")} description={entry.getIn(["data", "description"])} title={entry.getIn(["data", "title"])} />;
};

WidgetPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default WidgetPostPreview;
