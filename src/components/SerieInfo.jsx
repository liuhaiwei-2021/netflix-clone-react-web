import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { useModal } from "../state/ModalContext";
import EpisodeCard from "./EpisodeCard";
import "../styles/SerieInfo.css";
import YoutubePlayer from "./YoutubePlayer";
import SeasonGroupHeader from "./SeasonGroupHeader";

export default function SerieInfo({ serie }) {
	const { setModal } = useModal();
	const { name, season, genre, imgBackgroundURL, description, category, totalView } = serie;

	const { data, loading, error } = useFetch(
		"/categories/" + category + "/content/" + name + "/season1/"
	);

	const [seasonInfo, setSeasonInfo] = useState([]);

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
		<div className="previewModal-wrapper bg-dark" onClick={() => setModal(null)}>
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
					<SeasonGroupHeader />
					<div>{SeasonInfo}</div>
				</div>
			</div>
		</div>
	);
}
