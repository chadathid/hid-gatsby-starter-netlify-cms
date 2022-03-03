import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import AsideMenu from "../components/AsideMenu";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ComponentTemplate = ({ content, contentComponent, description, tags, title, helmet }) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="section">
			<div className="container content">
				<div className="columns">
					<div className="column is-3 has-shadow-right" style={{ position: `relative`, top: `-3rem`, paddingRight: `0` }}>
						<AsideMenu />
					</div>
					<div className="column is-9">
						<h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
						<p>{description}</p>
						<PostContent content={content} />
						{tags && tags.length ? (
							<div style={{ marginTop: `4rem` }}>
								<h4>Tags</h4>
								<ul className="taglist">
									{tags.map((tag) => (
										<li key={tag + `tag`}>
											<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
										</li>
									))}
								</ul>
							</div>
						) : null}
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
			<ComponentTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Component">
						<title>{`${post.frontmatter.title}`}</title>
						<meta name="description" content={`${post.frontmatter.description}`} />
					</Helmet>
				}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
			/>
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
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
			}
		}
	}
`;
