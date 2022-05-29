// NPM packages
import { useEffect, useState } from "react";
// project files
import useFetch from "../hooks/useFetch";
import { readDocument } from "../scripts/fireStore";
import { useModal } from "../state/ModalContext";
import "../styles/SerieInfo.css";
import EpisodeCard from "./EpisodeCard";
import SeasonGroupHeader from "./SeasonGroupHeader";
import Loader from "../scripts/Loader";
import Error from "../components/Error";
import YoutubePlayer from "./YoutubePlayer";

export default function SerieInfo({ serie }) {
	const { setModal } = useModal();
	const [seasonNumber, setSeasonNumber] = useState(1);
	const { name, seasons, genre, imgBackgroundURL, description, category } = serie;

	const { data, error, loading } = useFetch(
		"/categories/" + category + "/content/" + name + "/season" + seasonNumber
	);

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
			{loading && <Loader />}
			{error && <Error />}
			<button className="serie-info-cancel" onClick={() => setModal(null)}>
				X
			</button>

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
					{category !== "movies" && (
						<SeasonGroupHeader
							seasons={seasons}
							hook={[seasonNumber, setSeasonNumber]}
						/>
					)}
					<div>{SeasonInfo}</div>
				</div>
			</div>
		</div>
	);
}
