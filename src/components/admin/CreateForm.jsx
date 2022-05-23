//NPM packages
import { useState } from "react";

// Project files
import form from "../../data/serieForm.json";
import { createFile } from "../../scripts/cloudStorage";
import { createDocumentWithId } from "../../scripts/fireStore";
import Loader from "../../scripts/Loader";
import { useModal } from "../../state/ModalContext";
import Error from "../shared/Error";
import InputField from "../shared/InputField";
import "../../styles/CreateForm.css";

export default function CreateForm() {
	const { setModal } = useModal();

	const [name, setName] = useState("The good doctor");
	const [category, setCategory] = useState("series");
	const [season, setSeason] = useState(1);
	const [episodeNumber, setEpisodeNumber] = useState();
	const [youtubeID, setYoutubeID] = useState("");
	const [genre, setGenre] = useState(["Drama"]);
	const [description, setDescription] = useState("");

	const [imgURL, setImgURL] = useState("");
	const [file, setFile] = useState(null);

	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	//methods
	async function onCreate(e) {
		e.preventDefault();

		const newEpispde = {
			name: name,
			cateory: category,
			season: season,
			episodeNumber: episodeNumber,
			youtubeID: youtubeID,
			description: description,
			imgURL: "",
		};

		const path = "/categories/" + category + "/content/" + name + "/season" + season + "/";
		const id = "episode" + episodeNumber;
		const fileName = `${id}-${name}.png`;
		const filePath = path + fileName;
		const imgURL = await createFile(filePath, file);
		newEpispde.imgURL = imgURL;

		const payload = await createDocumentWithId(path, id, newEpispde);

		const { message, error, loading } = payload;

		setMessage(message);
		setError(error);
		setLoading(loading);

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
			<InputField setup={form.episodeNumber} state={[episodeNumber, setEpisodeNumber]} />
			<InputField setup={form.youtubeID} state={[youtubeID, setYoutubeID]} />
			<InputField setup={form.description} state={[description, setDescription]} />

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
