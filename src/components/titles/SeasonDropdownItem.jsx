//project files
import "../../styles/SeasonDropdownItem.css";

export default function SeasonDropdownItem({ setSeasonNumber, seasonItem }) {
	return (
		<li
			onClick={() => {
				setSeasonNumber(seasonItem);
			}}
			className="season-dropdown-item">
			<span>Season {seasonItem}</span>
		</li>
	);
}
