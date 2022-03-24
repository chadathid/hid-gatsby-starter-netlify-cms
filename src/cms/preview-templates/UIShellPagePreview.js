import React from "react";
import PropTypes from "prop-types";
import { UIShellPageTemplate } from "../../templates/ui-shell-page";

const UIShellPagePreview = ({ entry, widgetFor }) => <UIShellPageTemplate title={entry.getIn(["data", "title"])} content={widgetFor("body")} />;

UIShellPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default UIShellPagePreview;
