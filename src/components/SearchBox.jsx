import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/search.json";
import InputField from "../components/shared/InputField";
import "../styles/SearchBox.css";
import { useSearch } from "../state/SearchContext";

export default function SearchBox({ titles }) {
	const { searchResult, setSearchResult } = useSearch();
	const [searchWords, setSearchWords] = useState("");
	const [isShow, setIsShow] = useState(false);
	const navigation = useNavigate();

	const handleSearch = () => {
		setIsShow(!isShow);
		const result = titles.find(
			(element) => element.name.toLowerCase() === searchWords.toLowerCase().trim()
		);
		console.log(result);
		if (result === undefined) {
		} else {
			navigation("/search");
			setSearchResult(result);
		}
	};

	return (
		<div className="search-container">
			<button className="search-btn">
				<i onClick={handleSearch} className="fa fa-search search-icon"></i>
				{isShow && <InputField setup={data.search} state={[searchWords, setSearchWords]} />}
			</button>

			<a href="/#" className="search-btn"></a>
		</div>
	);
}
