import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

const AsideMenuTemplate = class extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: itemLinks } = data.allMarkdownRemark;
		return (
			<aside className="menu aside-menu">
				<p className="menu-label">Components</p>
				<ul className="menu-list">
					{itemLinks &&
						itemLinks.map(({ node: itemLink }) => (
							<Link activeClassName="is-active" to={itemLink.fields.slug} key={Math.random()}>
								{itemLink.frontmatter.title}
							</Link>
						))}
				</ul>
			</aside>
		);
	}
};

export default function AsideMenu() {
	return (
		<StaticQuery
			query={graphql`
				query AsideMenuQuery {
					allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }, filter: { frontmatter: { templateKey: { eq: "component-post" } } }) {
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
			`}
			render={(data) => <AsideMenuTemplate data={data} />}
		/>
	);
}
