import React from "react";

export default function Header() {
	return (
		<div className="header">
			<span className="story-logo nfLogo">
				<img src="assets/images/icons8-netflix-108.svg" alt="logo-108" />
			</span>
			<div className="language-container"></div>
			<a href="/login" className="authLinks ">
				<button className="redButton">Sign In</button>
			</a>
		</div>
	);
}
