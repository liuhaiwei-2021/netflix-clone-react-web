//Project files
import CreateEpisodeForm from "../components/admin/CreateEpisodeForm";
import CreateMovieForm from "../components/admin/CreateMovieForm";
import CreateSeriesForm from "../components/admin/CreateSeriesForm";
import { useModal } from "../state/ModalContext";
import "../styles/Admin.css";

export default function Admin() {
	//Global state
	const { setModal } = useModal();

	return (
		<div className="admin">
			<button className="btn-add" onClick={() => setModal(<CreateEpisodeForm />)}>
				+Add a new episode
			</button>

			<button className="btn-add" onClick={() => setModal(<CreateSeriesForm />)}>
				+Add a new series/documnetaies
			</button>

			<button className="btn-add" onClick={() => setModal(<CreateMovieForm />)}>
				+Add a new movie
			</button>
		</div>
	);
}
