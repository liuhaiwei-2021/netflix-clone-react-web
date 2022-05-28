import "../styles/SeasonGroupHeader.css";

function SeasonGroupHeader({ season, hook }) {
	const [seasonNumber, setSeasonNumber] = hook;
	console.log(season);

	return (
		<div className="season-head-dropdown">
			<h3>Episodes</h3>

			<div className="dropdown">
				<button className="dropbtn">Season {seasonNumber}</button>
				<div className="dropdown-content">
					<li>
						<button
							onClick={() => {
								setSeasonNumber(2);
							}}>
							Season 2
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								setSeasonNumber(1);
							}}>
							Season 1
						</button>
					</li>
				</div>
			</div>
		</div>
	);
}

export default SeasonGroupHeader;
