// file packages
import Footer from "../components/footer/Footer";
import HeaderLogin from "../components/header/HeaderLogin";
import SectionsCards from "../components/titles/SectionsCards";
import { useMovies } from "../state/MoviesContext";
import "../styles/Flims.css";

export default function Series() {
	const { movies } = useMovies();

	return (
		<>
			<div className="movies-page">
				<HeaderLogin />
				<div className="main-view">
					<div>
						<SectionsCards data={movies} title={"Flims"} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
