import React from "react";
import PropTypes from "prop-types";
import { GettingStartedPageTemplate } from "../../templates/getting-started-page";

const GettingStartedPagePreview = ({ entry, widgetFor }) => <GettingStartedPageTemplate title={entry.getIn(["data", "title"])} content={widgetFor("body")} />;

GettingStartedPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default GettingStartedPagePreview;
