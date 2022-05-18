import "../styles/Admin.css";

import { useModal } from "../state/ModalContext";
import CreateForm from "../components/admin/CreateForm";
export default function Admin() {
	const { setModal } = useModal();

	return (
		<div className="admin">
			<button className="btn-add" onClick={() => setModal(<CreateForm />)}>
				+Add a new course
			</button>
			<button>documents</button>
			<button>movies</button>
		</div>
	);
}
