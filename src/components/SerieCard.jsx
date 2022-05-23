import "../styles/SerieCard.css";

export default function SerieCard({ serie }) {
	const { name, season, genre, imgURL, id } = serie;
	return (
		<div className="serie-card">
			{id}
			<span>{name}</span>
			<img src={imgURL} alt="" />
		</div>
	);
}
