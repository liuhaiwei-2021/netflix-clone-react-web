import "../styles/MovieCard.css";
import { useModal } from "../state/ModalContext";
import SerieInfo from "./SerieInfo";

export default function MovieCard({ movie }) {
	const { setModal } = useModal();
	const { name, genre, imgURL } = movie;
	return (
		<div className="movie-card" onClick={() => setModal(<SerieInfo serie={movie} />)}>
			<img src={imgURL} alt="" />
		</div>
	);
}
