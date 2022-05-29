//Project files
import CreateEpisodeForm from "../components/admin/CreateEpisodeForm";
import CreateSeriesForm from "../components/admin/CreateSeriesForm";
import { useModal } from "../state/ModalContext";
import "../styles/Admin.css";

export default function Admin() {
	//Global state
	const { setModal } = useModal();

	return (
		<div className="admin">
			<div>
				<h2>STEP 1:</h2>
				<button className="btn-add" onClick={() => setModal(<CreateSeriesForm />)}>
					+Add a new series/documnetaies/movies
				</button>
			</div>
			<div>
				<h2>STEP 2:</h2>
				<button className="btn-add" onClick={() => setModal(<CreateEpisodeForm />)}>
					+Add a new episode/movie
				</button>
			</div>
		</div>
	);
}
