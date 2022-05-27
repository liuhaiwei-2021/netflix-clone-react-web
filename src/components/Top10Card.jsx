//projecy files
import { updateDocument } from "../scripts/fireStore";
import { useModal } from "../state/ModalContext";
import "../styles/Top10Card.css";
import SerieInfo from "./SerieInfo";

export default function Top10Card({ serie, index }) {
	//global state
	const { setModal } = useModal();

	//properties
	const { id, name, imgURL, totalView, category } = serie;

	//methods
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
		<div onClick={view} key={id} className="top10-card bg-dark">
			<img className="top10-number" src={"assets/images/numbers/" + (index + 1) + ".svg"} />
			<div className="top10-info">
				<img className="top10-img" src={imgURL} alt="" />
				<img className="top10-logo" src="assets/images/short-logo.png" alt="" />
			</div>
		</div>
	);
}
