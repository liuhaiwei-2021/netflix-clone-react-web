import "../styles/HeaderLogin.css";
import { Link, NavLink } from "react-router-dom";

import SearchBox from "./SearchBox";

export default function HeaderLogin({ titles }) {
	return (
		<div className="header-login">
			<Link className="navbar-link" to="/browse">
				<img className="logo" src="assets/images/logo.png" alt="logo" />
			</Link>
			<ul className="primary-navigation"></ul>
			<div className="secondary-navigation">
				<div className="nav-element">
					<SearchBox titles={titles} />
				</div>

				<div className="nav-element">
					<div className="account-menu-item">
						<img src="assets/images/defaultUser.jpg" alt="" />
						<div className="account-dropdown-button">account-dropdown-button</div>
					</div>
				</div>
			</div>
		</div>
	);
}
