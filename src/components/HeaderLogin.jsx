import "../styles/HeaderLogin.css";

export default function HeaderLogin() {
	return (
		<div className="header-login">
			<a>
				<img className="logo" src="assets/images/logo.png" alt="logo" />
			</a>
			<ul className="primary-navigation">
				<li>Home</li>
				<li>Series</li>
				<li>Films</li>
				<li>New & Popular</li>
				<li>My List</li>
			</ul>
			<div className="secondary-navigation">
				<div className="nav-element">search</div>

				<div className="nav-element">
					<div className="account-menu-item">
						<div className="account-dropdown-button">account-dropdown-button</div>
					</div>
				</div>
			</div>
		</div>
	);
}
