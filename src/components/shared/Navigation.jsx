//NPM packages
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Project files
import { logOut } from "../../scripts/firebaseAuth";
import { useAuth } from "../../state/AuthContext";
import { useUser } from "../../state/UserContext";
import "../../styles/Navigation.css";

// import Loader from "../scripts/Loader";

export default function Navigation() {
	//Global state
	const { setLoggedIn } = useAuth();
	const { user, setUser } = useUser();

	const admin = user?.roles?.find((role) => role === 2);

	//properties
	const navigation = useNavigate();
	const toggleLabel = user ? "Log Out" : "";

	// Methods
	async function onLogout() {
		const payload = await logOut();
		const { data, error } = payload;
		error ? onFail(data) : onSuccess(data);
	}

	function onSuccess(data) {
		setLoggedIn(false);
		setUser(null);

		alert("Log out successfully!");
		navigation("/login");
	}

	function onFail(data) {
		alert("logut failed");
	}

	return (
		<div className="nav-bar">
			<div className="nav-container">
				<div>
					<Link className="navbar-link" to="/">
						<img className="logo" src="/images/logo.png" alt="logo" />
						<span className="web-name">Mind Match</span>
					</Link>
				</div>

				<ul className="navbar-items">
					{user && (
						<li>
							<a href="https://calendar.google.com/calendar/u/0/r?tab=rc">
								<img src="/images/google-calendar.png" alt="" />
							</a>
						</li>
					)}
					{user && (
						<li>
							<a href="https://slack.com/get-started#/landing">
								<img src="/images/slack.png" alt="" />
							</a>
						</li>
					)}

					{user && (
						<li className="nav-item">
							<NavLink className="nav-link" to="/dashboard" exact="true">
								Dashboard
							</NavLink>
						</li>
					)}
					{admin && (
						<li className="nav-item">
							<NavLink className="nav-link" to="/courses-management" exact="true">
								Courses
							</NavLink>
						</li>
					)}
					{admin && (
						<li className="nav-item">
							<NavLink className="nav-link" to="/students-management" exact="true">
								Students
							</NavLink>
						</li>
					)}
					{user && (
						<li className="nav-item">
							<NavLink className="nav-link" to="/profile" exact="true">
								Profile
							</NavLink>
						</li>
					)}
					<li>
						<span className="logut" onClick={onLogout}>
							{toggleLabel}
						</span>
					</li>

					{!user && (
						<li>
							<NavLink className="nav-link" to="/signup" exact="true">
								Sign Up
							</NavLink>
						</li>
					)}

					{!user && (
						<li>
							<NavLink className="nav-link" to="/login" exact="true">
								Log In
							</NavLink>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}
