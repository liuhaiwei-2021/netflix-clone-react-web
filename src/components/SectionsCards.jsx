import SerieCard from "./SerieCard";
import "../styles/SerieCards.css";

export default function SectionsCards({ data, title }) {
	const Series = data.slice(0, 6).map((serie) => (
		<div key={serie.id}>
			<SerieCard serie={serie} />
		</div>
	));
	return (
		<section className="series">
			<h1>{title}</h1>
			<div className="serie-cards">{Series}</div>
		</section>
	);
}
