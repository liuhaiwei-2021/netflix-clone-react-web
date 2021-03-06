//NPM packages
import { useState } from "react";
// Project files
import form from "../../data/serieForm.json";
import { createFile } from "../../scripts/cloudStorage";
import { createDocumentWithId } from "../../scripts/fireStore";
import Loader from "../../scripts/Loader";
import { useModal } from "../../state/ModalContext";
import "../../styles/CreateSeriesForm.css";
import Error from "../shared/Error";
import InputField from "../shared/InputField";

export default function CreateEpisodeForm() {
	//global state
	const { setModal } = useModal();
	// local state
	const [name, setName] = useState("");
	const [episodeName, setEpisodeName] = useState("");
	const [category, setCategory] = useState("movies");
	const [season, setSeason] = useState(1);
	const [episodeNumber, setEpisodeNumber] = useState(1);
	const [youtubeID, setYoutubeID] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	//methods
	async function onCreate(e) {
		e.preventDefault();

		let newEpispde;

		newEpispde = {
			name: name,
			episodeName: episodeName,
			category: category,
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
		setModal(null);
	}

	function onImageChoose(event) {
		const file = event.target.files[0];
		setFile(file);
	}

	return (
		<form onSubmit={onCreate} className="create-form">
			{loading && <Loader />}
			{error && <Error />}

			<InputField setup={form.name} state={[name, setName]} />
			<InputField setup={form.episodeName} state={[episodeName, setEpisodeName]} />
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

			<button>Submit</button>
			<button
				onClick={() => {
					setModal(null);
				}}>
				Cancel
			</button>
		</form>
	);
}
