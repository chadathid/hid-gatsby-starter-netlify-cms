import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AsideMenu from "../components/AsideMenu";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const WidgetTemplate = ({ content, contentWidget, description, title, asideMenuItems }) => {
	const PostContent = contentWidget || Content;

	return (
		<section className="section">
			<div className="container content">
				<div className="columns">
					<div className="column is-3 has-shadow-right" style={{ position: `relative`, top: `-3rem`, paddingRight: `0` }}>
						<AsideMenu heading="Widgets" menuItems={asideMenuItems} />
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
	const { page, asideMenu } = data;

	return (
		<Layout>
			<Helmet titleTemplate="%s | Widget">
				<title>{`${page.frontmatter.title}`}</title>
			</Helmet>
			<WidgetTemplate
				content={page.html}
				contentWidget={HTMLContent}
				description={page.frontmatter.description}
				title={page.frontmatter.title}
				asideMenuItems={asideMenu.edges}
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
		page: markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				description
			}
		}
		asideMenu: allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }, filter: { frontmatter: { templateKey: { eq: "widget-post" } } }) {
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
