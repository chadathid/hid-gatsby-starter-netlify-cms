import * as React from "react";
//import { Link } from "gatsby";
import settings from "../settings/settings-data.json";

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer has-text-grey columns">
				<div className="column">
					<span className="is-size-7">
						© {new Date().getFullYear()} HID Global Corporation/ASSA ABLOY. All rights reserved. |{" "}
						<a href={settings.footer.privacylink} className="">
							Privacy Statement
						</a>{" "}
						|{" "}
						<a href={settings.footer.termslink} className="">
							Terms of Use
						</a>
					</span>
				</div>
				<div className="column has-text-right-tablet">
					<span className="is-size-7">Version {settings.footer.version}</span>
				</div>
			</footer>
		);
	}
};

export default Footer;
