import React from "react";
import PropTypes from "prop-types";
import { ComponentsIndexPageTemplate } from "../../templates/components-page";

const ComponentsIndexPreview = ({ entry, getAsset, widgetFor }) => {
	const data = entry.getIn(["data"]).toJS();

	if (data) {
		return (
			<ComponentsIndexPageTemplate
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

ComponentsIndexPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	getAsset: PropTypes.func,
	widgetFor: PropTypes.func,
};

export default ComponentsIndexPreview;
