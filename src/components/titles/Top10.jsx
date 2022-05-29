//NPM packages
import { useEffect } from "react";
//Project files
import Top10Card from "./Top10Card";
import "../../styles/Top10.css";

export default function Top10({ data }) {
	const Top10 = data.map((serie, index) => <Top10Card key={index} serie={serie} index={index} />);

	return (
		<section className="top10">
			<h1>Top10 in Sweden Today</h1>
			<div className="top10-cards"> {Top10}</div>
		</section>
	);
}
