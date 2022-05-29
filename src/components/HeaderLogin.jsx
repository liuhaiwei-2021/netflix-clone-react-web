//NPM packages
import { Link, useNavigate } from "react-router-dom";
//project files
import { logOut } from "../scripts/firebaseAuth";
import { useUser } from "../state/UserContext";
import "../styles/HeaderLogin.css";
import SearchBox from "./SearchBox";

export default function HeaderLogin({ titles }) {
	// global state
	const { user, setUser } = useUser();
	//properties
	const navigation = useNavigate();
	const toggleLabel = user ? "Sign out" : "";
	// Methods
	async function onLogout() {
		const payload = await logOut();
		const { data, error } = payload;
		error ? onFail(data) : onSuccess(data);
	}
	function onSuccess(data) {
		setUser(null);
		alert("Log out successfully!");
		navigation("/login");
	}

	function onFail(data) {
		alert("logut failed");
	}
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
					</div>
				</div>
				<div className="account-menu-element">
					<span className="logut" onClick={onLogout}>
						{toggleLabel}
					</span>
				</div>
			</div>
		</div>
	);
}
