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
	const [name, setName] = useState("");
	const [category, setCategory] = useState("movies");
	const [genre, setGenre] = useState([""]);
	const [description, setDescription] = useState("H");

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
			description: description,
			imgURL: "",
			genre: genre,
		};

		const path = "/categories/movies/content";
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
