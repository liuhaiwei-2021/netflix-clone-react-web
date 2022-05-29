// file packages
import Footer from "../components/footer/Footer";
import HeaderLogin from "../components/header/HeaderLogin";
import SectionsCards from "../components/titles/SectionsCards";
import { useDocumentaries } from "../state/DocumentariesContext";
import "../styles/Documentaries.css";

export default function Documentaries() {
	const { documentaries } = useDocumentaries();

	return (
		<>
			<div className="documentaries-page">
				<HeaderLogin />
				<div className="main-view">
					<div>
						<SectionsCards data={documentaries} title={"Documentaries"} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
