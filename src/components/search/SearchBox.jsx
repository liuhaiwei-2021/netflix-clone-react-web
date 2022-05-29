import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/search.json";
import InputField from "../shared/InputField";
import "../../styles/SearchBox.css";
import { useSearch } from "../../state/SearchContext";

export default function SearchBox({ titles }) {
	const { searchResult, setSearchResult } = useSearch();
	const [searchWords, setSearchWords] = useState("");
	const [isShow, setIsShow] = useState(false);
	const navigation = useNavigate();

	const handleSearch = () => {
		const result = titles.find(
			(element) => element.name.toLowerCase() === searchWords.toLowerCase().trim()
		);
		if (result === undefined) {
		} else {
			navigation("/search");
			setSearchResult(result);
		}
	};

	return (
		<div className="nav-element">
			<div className="search-container">
				<form className="search">
					<InputField setup={data.search} state={[searchWords, setSearchWords]} />
					<button className="search-btn">
						<img onClick={handleSearch} src="assets/images/search.svg" alt="" />
					</button>
				</form>

				<a href="/#" className="search-btn"></a>
			</div>
		</div>
	);
}
