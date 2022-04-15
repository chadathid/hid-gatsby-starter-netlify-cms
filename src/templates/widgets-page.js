import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import WidgetRoll from "../components/WidgetRoll";
import FullWidthImage from "../components/FullWidthImage";

import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const WidgetsIndexPageTemplate = ({ image, title, body, contentComponent }) => {
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
									<WidgetRoll />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

WidgetsIndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	// subheading: PropTypes.string,
	// heading: PropTypes.string,
	body: PropTypes.string,
	contentComponent: PropTypes.func,
	// content: PropTypes.shape({
	// 	blurbs: PropTypes.array,
	// }),
};

const WidgetsIndexPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<Helmet titleTemplate="%s">
				<title>{`${post.frontmatter.title}`}</title>
			</Helmet>
			<WidgetsIndexPageTemplate
				image={post.frontmatter.image}
				title={post.frontmatter.title}
				// subheading={post.frontmatter.subheading}
				// content={post.frontmatter.content}
				// heading={post.frontmatter.heading}
				body={post.html}
				contentComponent={HTMLContent}
			/>
		</Layout>
	);
};

WidgetsIndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default WidgetsIndexPage;

export const pageQuery = graphql`
	query WidgetsIndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "widgets-page" } }) {
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
