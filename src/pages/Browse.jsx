import { useEffect } from "react";

import HeaderLogin from "../components/HeaderLogin";

import { readDocument } from "../scripts/fireStore";
import "../styles/Browse.css";
import SerieCards from "../components/SerieCards";
import MovieCards from "../components/Moviecards";
import DocumentaryCards from "../components/DocumentaryCards";

export default function Browse() {
	//Global state

	return (
		<div className="browse">
			<HeaderLogin />
			<div className="main-view">
				<div>
					<section className="animations-container"></section>
					<SerieCards />
					<DocumentaryCards />
					<MovieCards />

					<section className="trending-now">trending now</section>
					<section className="my-list">my list</section>
					<section className="top-10">top 10</section>
				</div>
			</div>
		</div>
	);
}
