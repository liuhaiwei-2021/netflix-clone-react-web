import { Link, useNavigate } from "react-router-dom";
//project files

import { useUser } from "../../state/UserContext";
import "../../styles/HeaderLogin.css";
import SearchBox from "../search/SearchBox";
import Avatar from "./Avatar";
import Logout from "./Logout";

export default function HeaderLogin({ titles }) {
	// global state
	const { user, setUser } = useUser();
	//properties
	const navigation = useNavigate();

	return (
		<div className="header-login">
			<Link className="navbar-link" to="/browse">
				<img className="logo" src="assets/images/logo.png" alt="logo" />
			</Link>
			<ul className="primary-navigation"></ul>
			<div className="secondary-navigation">
				<SearchBox titles={titles} />
				<Avatar />
				<Logout />
			</div>
		</div>
	);
}
