//NPM packages
import { useState } from "react";
// Project files
import form from "../../data/serieForm.json";
import { createFile } from "../../scripts/cloudStorage";
import { createDocumentWithId } from "../../scripts/fireStore";
import Loader from "../../scripts/Loader";
import { useModal } from "../../state/ModalContext";
import { useSeries } from "../../state/SeriesContext";
import "../../styles/CreateSeriesForm.css";
import Error from "../shared/Error";
import InputField from "../shared/InputField";

export default function CreateForm() {
	//global state
	const { setModal } = useModal();
	const { series, setSeries } = useSeries();
	//local state
	const [name, setName] = useState("");
	const [category, setCategory] = useState("movies");
	const [seasons, setSeasons] = useState([]);
	const [genre, setGenre] = useState([""]);
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);
	const [backgroundFile, setBackgroundFile] = useState(null);

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	//methods
	async function onCreate(e) {
		e.preventDefault();

		const newSerie = {
			name: name,
			category: category,
			seasons: [seasons],
			description: description,
			imgURL: "",
			imgBackgroundURL: "",
			genre: genre,
			totalView: 0,
		};

		const path = "/categories/" + category + "/content/";
		const fileName = `${name}.png`;
		const filePath = path + fileName;
		const imgURL = await createFile(filePath, file);
		newSerie.imgURL = imgURL;

		const backgroundFileName = `background-${name}.png`;
		const backgroundFilePath = path + backgroundFileName;
		const imgBackgroundURL = await createFile(backgroundFilePath, backgroundFile);
		newSerie.imgBackgroundURL = imgBackgroundURL;

		const payload = await createDocumentWithId(path, name, newSerie);
		const { message, error, loading } = payload;

		setError(error);
		setLoading(loading);
		setSeries([...series, newSerie]);
		alert(message);
		setModal(null);
	}

	function onImageChoose(event) {
		const file = event.target.files[0];
		setFile(file);
	}

	function onImageBackgroundChoose(e) {
		const backgroundFile = e.target.files[0];
		setBackgroundFile(backgroundFile);
	}

	return (
		<form onSubmit={onCreate} className="create-form">
			{loading && <Loader />}
			{error && <Error />}

			<InputField setup={form.name} state={[name, setName]} />
			<InputField setup={form.category} state={[category, setCategory]} />
			<InputField setup={form.seasons} state={[seasons, setSeasons]} />
			<InputField setup={form.description} state={[description, setDescription]} />
			<InputField setup={form.genre} state={[genre, setGenre]} />

			<div className="upload-img">
				<label className="custom-file-upload" htmlFor="file-upload">
					Thumbnail image:
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
			<div className="button-roup">
				<button className="form-button">Submit</button>
				<button
					onClick={() => {
						setModal(null);
					}}>
					Cancel
				</button>
			</div>
		</form>
	);
}
