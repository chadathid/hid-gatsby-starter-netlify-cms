import React from "react";
import { Link } from "gatsby";
//import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: "",
		};
	}

	toggleHamburger() {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: "is-active",
					  })
					: this.setState({
							navBarActiveClass: "",
					  });
			}
		);
	}

	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main-navigation">
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item" title="Logo">
							<img src={logo} alt="Kaldi" style={{ width: "321px" }} />
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target="navMenu"
							role="menuitem"
							tabIndex={0}
							onKeyPress={() => this.toggleHamburger()}
							onClick={() => this.toggleHamburger()}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
						<div className="navbar-end has-text-centered">
							<Link className="navbar-item" to="/about">
								Getting Started
							</Link>
							<Link className="navbar-item" to="/blog">
								Fundamentals
							</Link>
							<div className="navbar-item has-dropdown is-hoverable">
								<Link className="navbar-link is-arrowless" to="/products">
									Components
								</Link>
								<div className="navbar-dropdown">
									<Link className="navbar-item" to="/">
										Avatar
									</Link>
									<Link className="navbar-item" to="/">
										Breadcrumbs
									</Link>
									<Link className="navbar-item" to="/">
										Button
									</Link>
									<Link className="navbar-item" to="/">
										Checkbox
									</Link>
									<Link className="navbar-item" to="/">
										Divider
									</Link>
									<Link className="navbar-item" to="/">
										Link
									</Link>
									<Link className="navbar-item" to="/">
										List
									</Link>
									<Link className="navbar-item" to="/">
										Loader
									</Link>
									<Link className="navbar-item" to="/">
										Logo
									</Link>
									<Link className="navbar-item" to="/">
										Notification
									</Link>
									<Link className="navbar-item" to="/">
										Pagination
									</Link>
									<Link className="navbar-item" to="/">
										Password Input
									</Link>
									<Link className="navbar-item" to="/">
										Progress Indicator
									</Link>
									<Link className="navbar-item" to="/">
										Radio Button
									</Link>
									<Link className="navbar-item" to="/">
										Select
									</Link>
									<Link className="navbar-item" to="/">
										Tabs
									</Link>
									<Link className="navbar-item" to="/">
										Tag
									</Link>
									<Link className="navbar-item" to="/">
										Text Area
									</Link>
									<Link className="navbar-item" to="/">
										Text Input
									</Link>
									<Link className="navbar-item" to="/">
										Toggle
									</Link>
									<Link className="navbar-item" to="/">
										Tooltip
									</Link>
								</div>
							</div>
							<Link className="navbar-item" to="/contact">
								Widgets
							</Link>
							<Link className="navbar-item" to="/contact">
								UI Shell
							</Link>
							<Link className="navbar-item" to="/about">
								Page Templates
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
