import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import { readDocument } from "../scripts/fireStore";

export default function YoutubePlayer({ name }) {
	const [defalultEpisode, setDefalultEpisode] = useState({});

	useEffect(() => {
		async function loadData() {
			const { data, loading, error } = await readDocument(
				"/categories/movies/content/" + name + "/season1/",
				"episode1"
			);
			setDefalultEpisode(data);
		}
		loadData();
	}, [name]);

	return (
		<div className="preview-player">
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${defalultEpisode.youtubeID}`}
				className="react-player"
			/>
		</div>
	);
}
