import "../styles/SerieCard.css";
import { useModal } from "../state/ModalContext";
import SerieInfo from "./SerieInfo";

export default function SerieCard({ serie }) {
	const { name, season, genre, imgURL, id } = serie;
	const { setModal } = useModal();
	return (
		<div onClick={() => setModal(<SerieInfo serie={serie} />)}>
			<div className="serie-card">
				<img src={imgURL} alt="" />
			</div>
		</div>
	);
}
