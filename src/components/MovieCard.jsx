import "../styles/MovieCard.css";
import { useModal } from "../state/ModalContext";
import SerieInfo from "./SerieInfo";
import { updateDocument } from "../scripts/fireStore";
import Loader from "../scripts/Loader";
import Error from "../components/shared/Error";

export default function MovieCard({ movie }) {
	//global state
	const { setModal } = useModal();

	//properties
	const { name, imgURL, totalView, category } = movie;
	const path = "/categories/" + category + "/content/";

	function view(path) {
		setModal(<SerieInfo serie={movie} />);
		const viewMovie = {
			...movie,
			totalView: totalView + 1,
		};
		const { message, error, loading } = updateDocument(path, viewMovie);
	}
	return (
		<div className="movie-card" onClick={view}>
			<img src={imgURL} alt="" />
		</div>
	);
}
