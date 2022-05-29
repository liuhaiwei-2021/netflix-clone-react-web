//NPM packages
import ReactPlayer from "react-player/youtube";
// project files
import "../../styles/EpisodeCard.css";

export default function EpisodeCard({ episode }) {
	const { episodeNumber, description, youtubeID } = episode;

	return (
		<div className="episode-card">
			<div className="episode-number">{episodeNumber}</div>
			<div className="episode-react-player-wrapper">
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${youtubeID}`}
					width="150px"
					height="85px"
				/>
			</div>
			<div className="episode-description">
				<p>{description}</p>
			</div>
			<hr className="hr" />
		</div>
	);
}
