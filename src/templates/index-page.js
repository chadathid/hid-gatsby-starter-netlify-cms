import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";

import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, title, subheading, content, heading, body, contentComponent }) => {
	const heroImage = getImage(image) || image;
	const PostContent = contentComponent || Content;

	return (
		<div>
			<FullWidthImage img={heroImage} title={title} subheading={subheading} />
			<section className="section section--gradient">
				<div className="container">
					<div className="section">
						<div className="columns">
							<div className="column is-12">
								<div className="content">
									<div className="columns">
										<div className="column is-12">
											<h1 className="has-text-weight-semibold is-size-2">{heading}</h1>
											<PostContent content={body} />
										</div>
									</div>
									<Features gridItems={content.blurbs} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	subheading: PropTypes.string,
	heading: PropTypes.string,
	body: PropTypes.string,
	contentComponent: PropTypes.func,
	content: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
};

const IndexPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<IndexPageTemplate
				image={post.frontmatter.image}
				title={post.frontmatter.title}
				subheading={post.frontmatter.subheading}
				content={post.frontmatter.content}
				heading={post.frontmatter.heading}
				body={post.html}
				contentComponent={HTMLContent}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				heading
				image {
					childImageSharp {
						gatsbyImageData(quality: 100, layout: FULL_WIDTH)
					}
				}
				subheading
				content {
					blurbs {
						title
						text
					}
				}
			}
			html
		}
	}
`;
