import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AsideMenu from "../components/AsideMenu";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ComponentTemplate = ({ content, contentComponent, description, title, asideMenuItems }) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="section">
			<div className="container content">
				<div className="columns">
					<div className="column is-3 has-shadow-right" style={{ position: `relative`, top: `-3rem`, paddingRight: `0` }}>
						<AsideMenu heading="Components" menuItems={asideMenuItems} />
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
	const { page, asideMenu } = data;

	return (
		<Layout>
			<Helmet titleTemplate="%s | Component">
				<title>{`${page.frontmatter.title}`}</title>
			</Helmet>
			<ComponentTemplate
				content={page.html}
				contentComponent={HTMLContent}
				description={page.frontmatter.description}
				title={page.frontmatter.title}
				asideMenuItems={asideMenu.edges}
			/>
		</Layout>
	);
};

Component.propTypes = {
	data: PropTypes.shape({
		page: PropTypes.object,
	}),
};

export default Component;

export const pageQuery = graphql`
	query ComponentByID($id: String!) {
		page: markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				description
			}
		}
		asideMenu: allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }, filter: { frontmatter: { templateKey: { eq: "component-post" } } }) {
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
					}
				}
			}
		}
	}
`;
