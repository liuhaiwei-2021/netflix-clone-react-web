//project files
import ReactPlayer from "react-player/youtube";

export default function ReactVideoPlayer({ linkID }) {
	return (
		<div className="player-wrapper">
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${linkID}`}
				width="100%"
				height="100%"
				className="react-player"
			/>
		</div>
	);
}
