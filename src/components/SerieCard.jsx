import "../styles/SerieCard.css";

export default function SerieCard({ serie }) {
	const { name, season, genre, imgURL } = serie;
	return (
		<div className="serie-card">
			<img src={imgURL} alt="" />
		</div>
	);
}
