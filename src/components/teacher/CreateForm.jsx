//NPM packages
import { useState } from "react";
// project files

import form from "../../data/courseForm.json";
import { createFile } from "../../scripts/cloudStorage";
import { createDocument } from "../../scripts/fireStore";
import Loader from "../../scripts/Loader";
import { useCourses } from "../../state/CoursesContext";
import { useModal } from "../../state/ModalContext";
import Error from "../shared/Error";
import InputField from "../shared/InputField";

export default function CreateForm() {
	const { setModal } = useModal();
	const { courses, setCourses } = useCourses();
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [imgURL, setImgURL] = useState("");
	const [createdBy, setCreatedBy] = useState("");
	const [link, setLink] = useState("");

	const [file, setFile] = useState(null);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	//methods
	async function onCreate(e) {
		e.preventDefault();

		const newCourse = {
			name: name,
			category: category.toLowerCase(),
			createdBy: createdBy,
			imgURL: "",
			link: link,
			updated: new Date().toLocaleDateString(),
		};
		const path = "courses/";
		const fileName = `${name}.png`;
		const filePath = path + fileName;
		const imgURL = await createFile(filePath, file);
		newCourse.imgURL = imgURL;

		const payload = await createDocument("/courses", newCourse);

		const { message, error, loading } = payload;

		setMessage(message);
		setError(error);
		setLoading(loading);
		setCourses([...courses, newCourse]);
		alert(message);
		resetForm();
		setModal(null);
	}

	function onImageChoose(event) {
		const file = event.target.files[0];
		setFile(file);
	}

	function resetForm() {
		setName("");
		setCategory("");
		setImgURL("");
		setCreatedBy("");
	}
	return (
		<form onSubmit={onCreate} className="add-form">
			{loading && <Loader />}
			{error && <Error />}
			<InputField setup={form.category} state={[category, setCategory]} />
			<InputField setup={form.name} state={[name, setName]} />
			<InputField setup={form.createdBy} state={[createdBy, setCreatedBy]} />
			<InputField setup={form.link} state={[link, setLink]} />

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
