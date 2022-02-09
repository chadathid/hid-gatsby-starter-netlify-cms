import * as React from "react";
import PropTypes from "prop-types";
//import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
	<div className="columns is-multiline">
		{gridItems.map((item) => (
			<div key={item.text} className="column is-4">
				<h2 className="subtitle">{item.title}</h2>
				<p>{item.text}</p>
			</div>
		))}
	</div>
);

FeatureGrid.propTypes = {
	gridItems: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			text: PropTypes.string,
		})
	),
};

export default FeatureGrid;
