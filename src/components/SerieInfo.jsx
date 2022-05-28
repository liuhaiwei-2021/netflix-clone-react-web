// NPM packages
import { useEffect, useState } from "react";
// project files
import useFetch from "../hooks/useFetch";
import { readDocument } from "../scripts/fireStore";
import { useModal } from "../state/ModalContext";
import "../styles/SerieInfo.css";
import EpisodeCard from "./EpisodeCard";
import SeasonGroupHeader from "./SeasonGroupHeader";

export default function SerieInfo({ serie }) {
	const { setModal } = useModal();
	const [seasonNumber, setSeasonNumber] = useState(1);
	const { name, season, genre, imgBackgroundURL, description, category, totalView } = serie;

	const { data, loading, error } = useFetch(
		"/categories/" + category + "/content/" + name + "/season" + seasonNumber
	);
	const test = readDocument("/categories/" + category + "/content/", name);
	console.log("test", test);

	const [seasonInfo, setSeasonInfo] = useState([]);

	//methods
	useEffect(() => {
		setSeasonInfo(data);
	}, [data, seasonNumber]);

	const SeasonInfo = seasonInfo.map((episode) => (
		<div key={episode.id}>
			<EpisodeCard episode={episode} />
		</div>
	));

	return (
		<div className="previewModal-wrapper bg-dark">
			<button onClick={() => setModal(null)}>X</button>
			<div className="serie-bg-img">
				<img src={imgBackgroundURL} alt="" />
			</div>

			<div className="detail-info-container">
				<div className="detail-info">
					<div className="description">
						<div>{description}</div>
					</div>
					<div className="genre">
						<span>Genre: </span>
						{genre}
					</div>
				</div>
				<div className="episode-card-group">
					<SeasonGroupHeader season={season} hook={[seasonNumber, setSeasonNumber]} />
					<div>{SeasonInfo}</div>
				</div>
			</div>
		</div>
	);
}
