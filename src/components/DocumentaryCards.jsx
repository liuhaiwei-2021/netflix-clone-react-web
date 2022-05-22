import { useEffect } from "react";
import SerieCard from "../components/SerieCard";

import useFetch from "../hooks/useFetch";
import { useSeries } from "../state/SeriesContext";
import { useDocumentaries } from "../state/DocumentariesContext";

export default function DocumentaryCards() {
	const { data, loading, error } = useFetch("/categories/documentaries/content/");

	const { documentaries, setDocumentaries } = useDocumentaries();

	//methods
	useEffect(() => {
		setDocumentaries(data);
	}, [data]);

	const Documentaries = documentaries.map((documentary) => (
		<div key={documentary.id}>
			<SerieCard serie={documentary} />
		</div>
	));
	return (
		<section className="series">
			<div className="serie-cards">{Documentaries}</div>
		</section>
	);
}
