import React from "react";
import PropTypes from "prop-types";
import { PageTemplatesPageTemplate } from "../../templates/page-templates-page";

const PageTemplatesPagePreview = ({ entry, widgetFor }) => <PageTemplatesPageTemplate title={entry.getIn(["data", "title"])} content={widgetFor("body")} />;

PageTemplatesPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default PageTemplatesPagePreview;
