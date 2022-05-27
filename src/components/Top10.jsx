//NPM packages
import { useEffect } from "react";
//Project files
import useFetch from "../hooks/useFetch";
import reverseArrayByView from "../scripts/reverseArrayByView";
import { useDocumentaries } from "../state/DocumentariesContext";
import { useMovies } from "../state/MoviesContext";
import { useSeries } from "../state/SeriesContext";
import "../styles/Top10.css";
import SerieCard from "./SerieCard";

export default function Top10() {
	const { series, setSeries } = useSeries();
	const { documentaries, setDocumentaries } = useDocumentaries();
	const { movies, setMovies } = useMovies();

	const seriesData = useFetch("/categories/series/content");
	const documentariesData = useFetch("/categories/documentaries/content/");
	const moviesData = useFetch("/categories/movies/content/");

	//methods
	useEffect(() => {
		setSeries(seriesData.data);
		setDocumentaries(documentariesData.data);
		setMovies(moviesData.data);
	}, [seriesData, documentariesData, moviesData]);

	let titles = [];
	titles = titles.concat(series, documentaries, movies).sort(reverseArrayByView("totalView"));

	const top10 = titles.slice(0, 10);

	const Top10 = top10.map((serie, index) => (
		<div key={serie.id} className="top10-card">
			<img className="top10-number" src={"assets/images/numbers/" + (index + 1) + ".svg"} />
			<img className="top10-img" src={serie.imgURL} alt="" />
		</div>
	));

	return (
		<section className="top10">
			<h1>Top10 in Sweden</h1>
			<div className="top10-cards"> {Top10}</div>
		</section>
	);
}
