//NPM packages
import { useNavigate } from "react-router-dom";
import { logOut } from "../../scripts/firebaseAuth";
import { useUser } from "../../state/UserContext";

export default function Logout() {
	//global state
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
		<div className="account-menu-element">
			<span className="logut" onClick={onLogout}>
				{toggleLabel}
			</span>
		</div>
	);
}
