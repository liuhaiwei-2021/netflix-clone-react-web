//NPM packages
import { Link } from "react-router-dom";
//project files

import "../../styles/HeaderLogin.css";
import SearchBox from "../search/SearchBox";
import Avatar from "./Avatar";
import Logout from "./Logout";
import { useUser } from "../../state/UserContext";

export default function HeaderLogin({ titles }) {
	const { user, setUser } = useUser();
	const admin = user?.roles?.find((role) => role === 2);
	return (
		<div className="header-login">
			<Link className="navbar-link" to="/browse">
				<img className="logo" src="assets/images/logo.png" alt="logo" />
			</Link>
			<ul className="primary-navigation">
				<li>
					<Link className="navbar-link" to="/browse">
						Home
					</Link>
				</li>
				<li>
					<Link className="navbar-link" to="/series">
						Series
					</Link>
				</li>
				<li>
					<Link className="navbar-link" to="/flims">
						Films
					</Link>
				</li>
				<li>
					<Link className="navbar-link" to="/documentaries">
						Documentaries
					</Link>
				</li>
				{admin && (
					<li>
						<Link className="nav-link" to="/admin" exact="true">
							Admin
						</Link>
					</li>
				)}
			</ul>
			<div className="secondary-navigation">
				<SearchBox titles={titles} />
				<Avatar />
				<Logout />
			</div>
		</div>
	);
}
