import React from "react";

export default function SerieCard({ serie }) {
	const { name, seasons } = serie;
	return (
		<div>
			<h>{name}</h>
			<span>{seasons}</span>
		</div>
	);
}
