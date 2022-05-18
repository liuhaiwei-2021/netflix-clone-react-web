import HeaderLogin from "../components/HeaderLogin";
import "../styles/Browse.css";

export default function Browse() {
	return (
		<div className="browse">
			<HeaderLogin />
			<div className="main-view">
				<div>
					<section className="animations-container"></section>
					<section className="series">Series</section>
					<section className="trending-now">trending now</section>
					<section className="my-list">my list</section>
					<section className="top-10">top 10</section>
				</div>
			</div>
		</div>
	);
}
