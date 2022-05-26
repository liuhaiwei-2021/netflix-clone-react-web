import "../styles/SeasonGroupHeader.css";

function SeasonGroupHeader() {
	return (
		<div className="season-head-dropdown">
			<h3>Episodes</h3>
			<div className="dropdown">
				<button className="dropbtn">Season 1</button>
				<div className="dropdown-content">
					<a href="#">Season 1</a>
					<a href="#">Season 2</a>
					<a href="#">Season 3</a>
				</div>
			</div>
		</div>
	);
}

export default SeasonGroupHeader;
