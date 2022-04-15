import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import ComponentRoll from "../components/ComponentRoll";
import FullWidthImage from "../components/FullWidthImage";

import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ComponentsIndexPageTemplate = ({ image, title, body, contentComponent }) => {
	const heroImage = getImage(image) || image;
	const PostContent = contentComponent || Content;

	return (
		<div>
			<FullWidthImage img={heroImage} title={title} />
			<section className="section section--gradient">
				<div className="container">
					<div className="section">
						<div className="columns">
							<div className="column is-12">
								<div className="content">
									<div className="columns">
										<div className="column is-12">
											<PostContent content={body} />
										</div>
									</div>
									<ComponentRoll />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

ComponentsIndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	body: PropTypes.string,
	contentComponent: PropTypes.func,
};

const ComponentsIndexPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<Helmet titleTemplate="%s">
				<title>{`${post.frontmatter.title}`}</title>
			</Helmet>
			<ComponentsIndexPageTemplate image={post.frontmatter.image} title={post.frontmatter.title} body={post.html} contentComponent={HTMLContent} />
		</Layout>
	);
};

ComponentsIndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default ComponentsIndexPage;

export const pageQuery = graphql`
	query ComponentsIndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "components-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						gatsbyImageData(quality: 100, layout: FULL_WIDTH)
					}
				}
			}
			html
		}
	}
`;
