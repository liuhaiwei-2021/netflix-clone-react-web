//NPM packages
import { useState } from "react";

// Project files
import form from "../../data/serieForm.json";
import { createFile } from "../../scripts/cloudStorage";
import { createDocumentWithId } from "../../scripts/fireStore";
import Loader from "../../scripts/Loader";
import { useSeries } from "../../state/SeriesContext";
import { useModal } from "../../state/ModalContext";
import Error from "../shared/Error";
import InputField from "../shared/InputField";

export default function CreateForm() {
	const { setModal } = useModal();
	const { series, setSeries } = useSeries();
	const [name, setName] = useState("Downton Abbey");
	const [category, setCategory] = useState("series");
	const [season, setSeason] = useState(1);
	const [episodeNumber, setEpisodeNumber] = useState(1);
	const [description, setDescription] = useState(
		"Downton Abbey is a British historical drama television series set in the early 20th century, created and co-written by Julian Fellowes. The series first aired on ITV in the United Kingdom on 26 September 2010, and in the United States on PBS, which supported production of the series as part of its Masterpiece Classic anthology, on 9 January 2011."
	);

	const [imgURL, setImgURL] = useState("");
	const [genre, setGenre] = useState(["british"]);

	const [file, setFile] = useState(null);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	//methods
	async function onCreate(e) {
		e.preventDefault();

		const newSerie = {
			name: "Downton Abbey",
			cateory: category,
			season: season,
			episodeNumber: episodeNumber,
			description:
				"Downton Abbey is a British historical drama television series set in the early 20th century, created and co-written by Julian Fellowes. The series first aired on ITV in the United Kingdom on 26 September 2010, and in the United States on PBS, which supported production of the series as part of its Masterpiece Classic anthology, on 9 January 2011.",
			imgURL: "",
			genre: ["british"],
		};

		const path = "/categories/" + category + "/" + name + "/season" + season + "/episodes/";
		const id = "episode" + episodeNumber;
		const fileName = `${name}.png`;
		const filePath = path + fileName;
		const imgURL = await createFile(filePath, file);
		newSerie.imgURL = imgURL;

		const payload = await createDocumentWithId(path, id, newSerie);

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
			<InputField setup={form.episodeNumber} state={[episodeNumber, setEpisodeNumber]} />
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
