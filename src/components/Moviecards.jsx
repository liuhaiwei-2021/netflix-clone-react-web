import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

import useFetch from "../hooks/useFetch";
import { useMovies } from "../state/MoviesContext";

export default function MovieCards() {
	const { data, loading, error } = useFetch("/categories/movies/content");
	const { movies, setMovies } = useMovies();

	//methods
	useEffect(() => {
		setMovies(data);
	}, [data]);
	console.log(movies);

	const Movies = movies.slice(0, 6).map((movie) => (
		<div key={movie.id}>
			<MovieCard movie={movie} />
		</div>
	));
	return (
		<section className="series">
			<h1>Movies</h1>
			<div className="serie-cards">{Movies}</div>
		</section>
	);
}
