//NPM packages
import { useEffect } from "react";

// file packages
import Footer from "../components/footer/Footer";
import HeaderLogin from "../components/header/HeaderLogin";
import Error from "../components/shared/Error";
import SectionsCards from "../components/titles/SectionsCards";
import Top10 from "../components/titles/Top10";
import useFetch from "../hooks/useFetch";
import Loader from "../scripts/Loader";
import randArray from "../scripts/randArray";
import reverseArrayByView from "../scripts/reverseArrayByView";
import { useDocumentaries } from "../state/DocumentariesContext";
import { useMovies } from "../state/MoviesContext";
import { useSeries } from "../state/SeriesContext";
// import { useTitles } from "../state/TitlesContext";
import "../styles/Browse.css";

export default function Browse() {
	const { series, setSeries } = useSeries();
	const { documentaries, setDocumentaries } = useDocumentaries();
	const { movies, setMovies } = useMovies();
	// const { titles, setTitles } = useTitles();

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
		<>
			<div className="browse">
				{(seriesData.loading || documentariesData.loading || moviesData.loading) && (
					<Loader />
				)}
				{(seriesData.error || documentariesData.error || moviesData.error) && <Error />}
				<HeaderLogin titles={titles} />
				<div className="main-view">
					{/* <YoutubePlayer name={randTitle.name} /> */}
					<div>
						<SectionsCards data={series.slice(0, 6)} title={"Series"} />
						<SectionsCards data={documentaries.slice(0, 6)} title={"Documentaries"} />
						<SectionsCards data={movies.slice(0, 6)} title={"Movies"} />
						<Top10 data={top10} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
