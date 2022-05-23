import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { useModal } from "../state/ModalContext";
import EpisodeCard from "./EpisodeCard";
import "../styles/SerieInfo.css";
import YoutubePlayer from "./YoutubePlayer";

export default function SerieInfo({ serie }) {
	const { setModal } = useModal();
	const { name, season, genre, imgURL, id, description } = serie;
	const { data, loading, error } = useFetch("/categories/series/content/" + name + "/season1/");

	const [seasonInfo, setSeasonInfo] = useState([]);
	const [defaultYoutubeID, setDefaultYoutubeID] = useState({});

	//methods
	useEffect(() => {
		setSeasonInfo(data);
	}, [data]);

	const SeasonInfo = seasonInfo.map((episode) => (
		<div key={episode.id}>
			<EpisodeCard episode={episode} />
		</div>
	));

	return (
		<div className="previewModal-wrapper">
			<YoutubePlayer name={name} />
			<div className="detail-info-container">
				<div className="detail-info">
					<div className="description">{description}</div>
					<div>
						<span>Genre: </span>
						{genre}
					</div>
				</div>
				<div className="episode-card-group">{SeasonInfo}</div>
			</div>

			<button onClick={() => setModal(null)}>cancel</button>
		</div>
	);
}
