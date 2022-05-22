import "../styles/Admin.css";
import Player from "./Player";

import { useModal } from "../state/ModalContext";
import CreateForm from "../components/admin/CreateForm";
import CreateSeriesForm from "../components/admin/CreateSeriesForm";
import CreateMovieForm from "../components/admin/CreateMovieForm";
export default function Admin() {
	const { setModal } = useModal();

	// const linkID = "8eZ_w0kMa9A";
	return (
		<div className="admin">
			<button className="btn-add" onClick={() => setModal(<CreateForm />)}>
				+Add a new episode
			</button>
			<button className="btn-add" onClick={() => setModal(<CreateSeriesForm />)}>
				+Add a new series/documnetaies
			</button>

			<button className="btn-add" onClick={() => setModal(<CreateMovieForm />)}>
				+Add a new movie
			</button>

			{/* <Player linkID={linkID} /> */}
		</div>
	);
}
