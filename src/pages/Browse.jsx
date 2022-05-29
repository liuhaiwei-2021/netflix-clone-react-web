//NPM packages
import { useEffect } from "react";
// File packages
import useFetch from "../hooks/useFetch";
import reverseArrayByView from "../scripts/reverseArrayByView";
import HeaderLogin from "../components/HeaderLogin";
import SectionsCards from "../components/SectionsCards";
import Top10 from "../components/Top10";
import { useDocumentaries } from "../state/DocumentariesContext";
import { useMovies } from "../state/MoviesContext";
import { useSeries } from "../state/SeriesContext";
import Loader from "../scripts/Loader";
import Error from "../components/Error";
import "../styles/Browse.css";

export default function Browse() {
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

	return (
		<div className="browse">
			{(seriesData.loading || documentariesData.loading || moviesData.loading) && <Loader />}
			{(seriesData.error || documentariesData.error || moviesData.error) && <Error />}
			<HeaderLogin titles={titles} />
			<div className="main-view">
				<div>
					<SectionsCards data={series} title={"Series"} />
					<SectionsCards data={documentaries} title={"Documentaries"} />
					<SectionsCards data={movies} title={"Movies"} />
					<Top10 data={top10} />
				</div>
			</div>
		</div>
	);
}
