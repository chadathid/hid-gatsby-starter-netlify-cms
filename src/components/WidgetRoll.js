import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class WidgetRollTemplate extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<div className="columns is-multiline">
				{posts &&
					posts.map(({ node: post }) => (
						<div className="is-parent column is-4" key={post.id}>
							<Link to={post.fields.slug} className="card">
								<p>{post.frontmatter.title}</p>
								<div className="card-image">
									{post.frontmatter.featuredimage ? (
										<figure className="image is-align-content-center">
											<PreviewCompatibleImage
												imageInfo={{
													image: post.frontmatter.featuredimage,
													alt: `featured image thumbnail for component ${post.frontmatter.title}`,
													//width: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.width,
													//height: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.height,
												}}
											/>
										</figure>
									) : null}
								</div>
							</Link>
						</div>
					))}
			</div>
		);
	}
}

WidgetRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
};

export default function WidgetRoll() {
	return (
		<StaticQuery
			query={graphql`
				query WidgetRollQuery {
					allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }, filter: { frontmatter: { templateKey: { eq: "widget-post" } } }) {
						edges {
							node {
								excerpt(pruneLength: 400)
								id
								fields {
									slug
								}
								frontmatter {
									title
									templateKey
									featuredimage {
										childImageSharp {
											gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
										}
										publicURL
										ext
									}
								}
							}
						}
					}
				}
			`}
			render={(data, count) => <WidgetRollTemplate data={data} count={count} />}
		/>
	);
}
