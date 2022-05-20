import "../styles/SerieCard.css";

export default function MovieCard({ movie }) {
	const { name, genre, imgURL } = movie;
	return (
		<div className="serie-card">
			<img src={imgURL} alt="" />
		</div>
	);
}
