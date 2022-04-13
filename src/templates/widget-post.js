import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import AsideMenu from "../components/AsideMenuWidgets";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const WidgetTemplate = ({ content, contentWidget, description, title, helmet }) => {
	const PostContent = contentWidget || Content;

	return (
		<section className="section">
			<div className="container content">
				<div className="columns">
					<div className="column is-3 has-shadow-right" style={{ position: `relative`, top: `-3rem`, paddingRight: `0` }}>
						<AsideMenu templateKey="widget-post" />
					</div>
					<div className="column is-9">
						<h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
						<p>{description}</p>
						<PostContent content={content} />
					</div>
				</div>
			</div>
		</section>
	);
};

WidgetTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentWidget: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
};

const Widget = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<WidgetTemplate
				content={post.html}
				contentWidget={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Widget">
						<title>{`${post.frontmatter.title}`}</title>
						<meta name="description" content={`${post.frontmatter.description}`} />
					</Helmet>
				}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

Widget.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default Widget;

export const pageQuery = graphql`
	query WidgetByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				description
			}
		}
	}
`;
