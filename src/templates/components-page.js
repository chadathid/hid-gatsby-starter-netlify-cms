import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ComponentRoll from "../components/ComponentRoll";

const ComponentsIndexPage = ({ data }) => {
	return (
		<Layout>
			<div
				className="full-width-image-container margin-top-0"
				style={{
					backgroundImage: `url('/img/hero-HID-components.jpeg')`,
				}}
			>
				<h1 className="has-text-weight-bold is-size-1 full-width-hero-title">Components</h1>
			</div>
			<section className="section">
				<div className="container">
					<div className="content">
						<h3 className="title is-3">The Building Blocks</h3>
						<p>
							Components are the key building blocks of any design system. Each component has been designed and coded to solve a specific UI problem for our users.
							These problems include presenting a list of options to select, enabling the submission of a form, providing feedback, and so on. All of the components
							in HID Galaxy System have been designed to work together, as parts of a greater whole.
						</p>
						<ComponentRoll />
					</div>
				</div>
			</section>
		</Layout>
	);
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
