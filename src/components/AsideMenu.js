import React from "react";
import { Link } from "gatsby";

const AsideMenu = ({ heading, menuItems }) => (
	<aside className="menu aside-menu is-hidden-mobile">
		<p className="menu-label">{heading}</p>
		<ul className="menu-list">
			{menuItems &&
				menuItems.map(({ node: itemLink }) => (
					<Link activeClassName="is-active" to={itemLink.fields.slug} key={Math.random()}>
						{itemLink.frontmatter.title}
					</Link>
				))}
		</ul>
	</aside>
);

export default AsideMenu;
