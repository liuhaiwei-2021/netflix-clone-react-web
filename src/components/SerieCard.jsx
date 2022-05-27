import "../styles/SerieCard.css";
import { useModal } from "../state/ModalContext";
import SerieInfo from "./SerieInfo";
import { updateDocument } from "../scripts/fireStore";

export default function SerieCard({ serie }) {
	const { imgURL, name, totalView, category } = serie;
	const { setModal } = useModal();

	function view() {
		setModal(<SerieInfo serie={serie} />);
		const viewSerie = {
			...serie,
			totalView: totalView + 1,
		};
		const path = "/categories/" + category + "/content/";
		updateDocument(path, viewSerie);
	}
	return (
		<div onClick={view}>
			<div className="serie-card ">
				<img src={imgURL} alt="" />
			</div>
		</div>
	);
}
