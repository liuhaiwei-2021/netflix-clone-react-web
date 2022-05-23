import "../styles/EpisodeCard.css";
import ReactPlayer from "react-player/youtube";

export default function EpisodeCard({ episode }) {
	const { episodeNumber, imgURL, description, youtubeID } = episode;

	function onYoutube() {}

	return (
		<div className="episode-card">
			<div>{episodeNumber}</div>
			<div className="episode-react-player-wrapper" onClick={onYoutube}>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${youtubeID}`}
					width="150px"
					height="85px"
				/>
			</div>
			<div className="episode-description">
				<p>{description}</p>
			</div>
		</div>
	);
}
