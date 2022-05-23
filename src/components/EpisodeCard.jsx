import "../styles/EpisodeCard.css";

export default function EpisodeCard({ episode }) {
	const { episodeNumber, imgURL, description } = episode;

	return (
		<div className="episode-card">
			<div>{episodeNumber}</div>
			<div>
				<img src={imgURL} alt="" />
			</div>
			<div>{description}</div>
		</div>
	);
}
