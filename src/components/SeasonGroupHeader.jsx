import "../styles/SeasonGroupHeader.css";
import SeasonDropdownItem from "./SeasonDropdownItem";

export default function SeasonGroupHeader({ seasons, hook }) {
	const [seasonNumber, setSeasonNumber] = hook;

	const SeasonDropdownItems = seasons.map((seasonItem, index) => (
		<SeasonDropdownItem key={index} setSeasonNumber={setSeasonNumber} seasonItem={seasonItem} />
	));

	return (
		<div className="season-head-dropdown">
			<h3>Episodes</h3>

			<div className="dropdown">
				<button className="dropbtn">Season {seasonNumber}</button>
				<div className="dropdown-content">
					<ul>{SeasonDropdownItems}</ul>
				</div>
			</div>
		</div>
	);
}
