import React from "react";
import PropTypes from "prop-types";
import { WidgetsIndexPageTemplate } from "../../templates/widgets-page";

const WidgetsIndexPreview = ({ entry, getAsset, widgetFor }) => {
	const data = entry.getIn(["data"]).toJS();

	if (data) {
		return (
			<WidgetsIndexPageTemplate
				image={getAsset(data.image)}
				title={data.title}
				// subheading={data.subheading}
				// content={data.content || { blurbs: [] }}
				// heading={data.heading}
				body={widgetFor("body")}
			/>
		);
	} else {
		return <div>Loading...</div>;
	}
};

WidgetsIndexPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	getAsset: PropTypes.func,
	widgetFor: PropTypes.func,
};

export default WidgetsIndexPreview;
