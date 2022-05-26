import "../styles/MovieCard.css";
import { useModal } from "../state/ModalContext";
import SerieInfo from "./SerieInfo";
import { updateDocument } from "../scripts/fireStore";

export default function MovieCard({ movie }) {
	const { setModal } = useModal();
	const { name, imgURL, totalView, category } = movie;

	async function view() {
		setModal(<SerieInfo serie={movie} />);

		const viewMovie = {
			...movie,
			totalView: totalView + 1,
		};
		const path = "/categories/" + category + "/content/";
		const { message, error, loading } = await updateDocument(path, viewMovie);
		console.log("movies", name, path);
	}
	return (
		<div className="movie-card" onClick={view}>
			<img src={imgURL} alt="" />
		</div>
	);
}
