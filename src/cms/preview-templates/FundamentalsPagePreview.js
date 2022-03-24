import React from "react";
import PropTypes from "prop-types";
import { FundamentalsPageTemplate } from "../../templates/fundamentals-page";

const FundamentalsPagePreview = ({ entry, widgetFor }) => <FundamentalsPageTemplate title={entry.getIn(["data", "title"])} content={widgetFor("body")} />;

FundamentalsPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default FundamentalsPagePreview;
