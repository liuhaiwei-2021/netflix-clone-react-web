//NPM packages
import { useState } from "react";

// Project files
import form from "../../data/serieForm.json";
import { createFile } from "../../scripts/cloudStorage";
import { createDocument } from "../../scripts/fireStore";
import Loader from "../../scripts/Loader";
import { useSeries } from "../../state/SeriesContext";
import { useModal } from "../../state/ModalContext";
import Error from "../shared/Error";
import InputField from "../shared/InputField";
import "../../styles/CreateForm.css";

export default function CreateForm() {
	const { setModal } = useModal();
	const { series, setSeries } = useSeries();
	const [name, setName] = useState("House of cards");
	const [category, setCategory] = useState("series");
	const [season, setSeason] = useState(3);
	const [genre, setGenre] = useState(["Drama"]);
	const [description, setDescription] = useState(
		"House of Cards is a 2013 American political drama series created by Beau Willimon. House of Cards is based on Michael Dobb's novel of the same name, and on the mini-TV series House of Cards in four episodes, based on the book, which was broadcast by the BBC in 1990."
	);

	const [imgURL, setImgURL] = useState("");
	const [file, setFile] = useState(null);

	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	//methods
	async function onCreate(e) {
		e.preventDefault();

		const newSerie = {
			name: name,
			cateory: category,
			season: season,
			description: description,
			imgURL: "",
			genre: genre,
		};

		const path = "/categories/series/content";
		const fileName = `${name}.png`;
		const filePath = path + fileName;
		const imgURL = await createFile(filePath, file);
		newSerie.imgURL = imgURL;

		const payload = await createDocument(path, newSerie);

		const { message, error, loading } = payload;

		setMessage(message);
		setError(error);
		setLoading(loading);
		setSeries([...series, newSerie]);
		alert(message);
		resetForm();
		setModal(null);
		console.log(error);
	}

	function onImageChoose(event) {
		const file = event.target.files[0];
		setFile(file);
	}

	function resetForm() {
		setName("");
		setGenre("");
		setCategory("");
	}
	return (
		<form onSubmit={onCreate} className="add-form">
			{loading && <Loader />}
			{error && <Error />}

			<InputField setup={form.name} state={[name, setName]} />
			<InputField setup={form.category} state={[category, setCategory]} />
			<InputField setup={form.season} state={[season, setSeason]} />
			<InputField setup={form.description} state={[description, setDescription]} />
			<InputField setup={form.genre} state={[genre, setGenre]} />

			<div className="upload-img">
				<label className="custom-file-upload" htmlFor="file-upload"></label>

				<input
					onChange={onImageChoose}
					id="file-upload"
					className="file-upload"
					type="file"
					accept="image/png, image/jpg"
					required
				/>
			</div>

			<button className="form-button">Submit</button>
			<button
				onClick={() => {
					setModal(null);
				}}
				className="form-button">
				Cancel
			</button>
		</form>
	);
}
