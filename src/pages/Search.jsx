import { useEffect } from "react";
import HeaderLogin from "../components/HeaderLogin";
import { useSearch } from "../state/SearchContext";
import SerieCard from "../components/SerieCard";
import "../styles/Search.css";

export default function Search() {
	const { searchResult, setSearchResult } = useSearch();

	useEffect(() => {
		if (searchResult !== null) setSearchResult(searchResult);
	}, [setSearchResult]);

	return (
		<div className="search-page bg-dark">
			<HeaderLogin />
			<div className="search-section">
				{!searchResult && (
					<div>
						<h3>Your search did not have any matches.</h3>
						<h5> Suggestions: - Try</h5>

						<p>- Try different keywords - Looking for a film or TV programme?</p>
					</div>
				)}
				{searchResult && <SerieCard serie={searchResult} />}
			</div>
		</div>
	);
}
