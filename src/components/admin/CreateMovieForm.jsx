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

	const [imgURL, setImgURL] = useState(""); //thumbnail
	const [imgBagroundURL, setImgBagroundURL] = useState(""); //background image
	const [file, setFile] = useState(null);
	const [backgroundFile, setBackgroundFile] = useState(null);
	const [youtubeID, setYoutubeID] = useState("");

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
			imgBagroundURL: "",
			genre: genre,
			youtubeID: youtubeID,
		};

		const path = "/categories/movies/content/";
		const fileName = `${name}.png`;
		const filePath = path + fileName;
		const imgURL = await createFile(filePath, file);
		newSerie.imgURL = imgURL;

		const backgroundFileName = `background-${name}.png`;
		const backgroundFilePath = path + backgroundFileName;
		const imgBagroundUPL = await createFile(backgroundFilePath, backgroundFile);
		newSerie.imgBagroundURL = imgBagroundURL;

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

	function onImageChoose(e) {
		const file = e.target.files[0];
		setFile(file);
	}

	function onImageBackgroundChoose(e) {
		const backgroundFile = e.target.files[0];
		setBackgroundFile(backgroundFile);
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
			<InputField setup={form.youtubeID} state={[youtubeID, setYoutubeID]} />

			<div className="upload-img">
				<label className="custom-file-upload" htmlFor="file-upload">
					Thumbnail:
				</label>
				<input
					onChange={onImageChoose}
					id="file-upload"
					className="file-upload"
					type="file"
					accept="image/png, image/jpg"
					required
				/>
			</div>
			<div className="upload-img">
				<label className="custom-file-upload" htmlFor="background-file-upload">
					Background image:
				</label>

				<input
					onChange={onImageBackgroundChoose}
					id="background-file-upload"
					className="background-file-upload"
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
