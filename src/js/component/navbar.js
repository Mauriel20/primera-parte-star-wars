import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3" id="navbar">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					{" "}
					<img src="https://img.icons8.com/ios/50/000000/star-wars.png" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
