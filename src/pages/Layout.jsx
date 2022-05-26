//NPM packages
import { Outlet } from "react-router-dom";
import "../styles/App.css";

const Layout = () => {
	return (
		<main className="appMountPoint bg-dark">
			<Outlet />
		</main>
	);
};

export default Layout;
