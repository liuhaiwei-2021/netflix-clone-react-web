import { useEffect } from "react";

import HeaderLogin from "../components/HeaderLogin";
import SerieCard from "../components/SerieCard";
import useFetch from "../hooks/useFetch";
import { useSeries } from "../state/SeriesContext";
import { readDocument } from "../scripts/fireStore";
import "../styles/Browse.css";

export default function Browse() {
	//Global state

	const { series, setSeries } = useSeries();
	const { data, loading, error } = useFetch("/categories/series/content");

	//methods
	useEffect(() => {
		setSeries(data);
	}, [data]);
	console.log(series);

	const Series = series.map((serie) => (
		<div key={serie.id}>
			<SerieCard serie={serie} />
		</div>
	));

	return (
		<div className="browse">
			<HeaderLogin />
			<div className="main-view">
				<div>
					<section className="animations-container"></section>
					<section className="series">
						<h1>Series</h1>
						<div className="serie-cards">{Series}</div>
					</section>
					<section className="trending-now">trending now</section>
					<section className="my-list">my list</section>
					<section className="top-10">top 10</section>
				</div>
			</div>
		</div>
	);
}
