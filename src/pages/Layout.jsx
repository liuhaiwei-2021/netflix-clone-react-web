//NPM packages
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<main className="appMountPoint">
			<Outlet />
		</main>
	);
};

export default Layout;
