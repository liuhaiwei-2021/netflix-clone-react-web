import "../styles/Admin.css";
import Player from "./Player";

import { useModal } from "../state/ModalContext";
import CreateForm from "../components/admin/CreateForm";
export default function Admin() {
	const { setModal } = useModal();

	const linkID = "8eZ_w0kMa9A";
	return (
		<div className="admin">
			<button className="btn-add" onClick={() => setModal(<CreateForm />)}>
				+Add a new item
			</button>
			<button>documents</button>
			<button>movies</button>
			<Player linkID={linkID} />
		</div>
	);
}
