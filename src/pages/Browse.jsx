// File packages
import DocumentaryCards from "../components/DocumentaryCards";
import HeaderLogin from "../components/HeaderLogin";
import MovieCards from "../components/MovieCards";
import SerieCards from "../components/SerieCards";
import Top10 from "../components/Top10";
import "../styles/Browse.css";

export default function Browse() {
	return (
		<div className="browse">
			<HeaderLogin />
			<div className="main-view">
				<div>
					<SerieCards />
					<DocumentaryCards />
					<MovieCards />
					<Top10 />
				</div>
			</div>
		</div>
	);
}
