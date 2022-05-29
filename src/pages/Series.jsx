// file packages
import Footer from "../components/footer/Footer";
import HeaderLogin from "../components/header/HeaderLogin";

import SectionsCards from "../components/titles/SectionsCards";

import { useSeries } from "../state/SeriesContext";
import "../styles/Series.css";

export default function Series() {
	const { series } = useSeries();

	return (
		<>
			<div className="series-page">
				<HeaderLogin />
				<div className="main-view">
					<div>
						<SectionsCards data={series} title={"Series"} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
