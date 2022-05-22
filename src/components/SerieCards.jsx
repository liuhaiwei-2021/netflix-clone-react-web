import { useEffect } from "react";
import SerieCard from "../components/SerieCard";

import useFetch from "../hooks/useFetch";
import { useSeries } from "../state/SeriesContext";

export default function SerieCards() {
	const { data, loading, error } = useFetch("/categories/series/content/");
	const { series, setSeries } = useSeries();

	//methods
	useEffect(() => {
		setSeries(data);
	}, [data]);

	const Series = series.map((serie) => (
		<div key={serie.id}>
			<SerieCard serie={serie} />
		</div>
	));
	return (
		<section className="series">
			<h1>Series</h1>
			<div className="serie-cards">{Series}</div>
		</section>
	);
}
