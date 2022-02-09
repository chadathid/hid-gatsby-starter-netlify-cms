import * as React from "react";
//import { Link } from "gatsby";

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer has-text-grey columns">
				<div className="column">
					<span className="is-size-7">
						© {new Date().getFullYear()} HID Global Corporation/ASSA ABLOY. All rights reserved. |{" "}
						<a href="https://www.hidglobal.com/about/privacy" className="">
							Privacy Statement
						</a>{" "}
						|{" "}
						<a href="https://www.hidglobal.com/about/terms-of-use" className="">
							Terms of Use
						</a>
					</span>
				</div>
				<div className="column has-text-right-tablet">
					<span className="is-size-7">Version 1.1</span>
				</div>
			</footer>
		);
	}
};

export default Footer;
