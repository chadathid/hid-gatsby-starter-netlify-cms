import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
// import { graphql, Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AsideMenu from "../components/AsideMenuComponent";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ComponentTemplate = ({ content, contentComponent, description, title, helmet }) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="section">
			<div className="container content">
				<div className="columns">
					<div className="column is-3 has-shadow-right" style={{ position: `relative`, top: `-3rem`, paddingRight: `0` }}>
						<AsideMenu templateKey="component-post" />
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

ComponentTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
};

const Component = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<Helmet titleTemplate="%s | Component">
				<title>{`${post.frontmatter.title}`}</title>
			</Helmet>
			<ComponentTemplate content={post.html} contentComponent={HTMLContent} description={post.frontmatter.description} title={post.frontmatter.title} />
		</Layout>
	);
};

Component.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default Component;

export const pageQuery = graphql`
	query ComponentByID($id: String!) {
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