import * as React from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const ElementGrid = ({ gridItems }) => (
	<div className="columns is-multiline">
		{gridItems &&
			gridItems.map(({ node: post }) => (
				<div className="is-parent column is-4" key={post.id}>
					<Link to={post.fields.slug} className="card">
						<p>{post.frontmatter.title}</p>
						<div className="card-image">
							{post.frontmatter.featuredimage ? (
								<figure className="image is-align-content-center">
									<PreviewCompatibleImage
										imageInfo={{
											image: post.frontmatter.featuredimage,
											alt: `featured image thumbnail for element ${post.frontmatter.title}`,
										}}
									/>
								</figure>
							) : null}
						</div>
					</Link>
				</div>
			))}
	</div>
);

export default ElementGrid;
