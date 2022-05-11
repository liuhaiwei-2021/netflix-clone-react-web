// MPM packages
import { useState } from "react";

// Project files
import { updateDocument } from "../../scripts/fireStore";
import form from "../../data/courseForm.json";
import InputField from "../shared/InputField";
import { useModal } from "../../state/ModalContext";
import { useCourses } from "../../state/CoursesContext";

export default function EditForm({ course }) {
	// Global state
	const { setModal } = useModal();
	const { courses, setCourses } = useCourses();

	// Local state
	const [name, setName] = useState(course.name);
	const [category, setCategory] = useState(course.category);
	const [imgURL, setImgURL] = useState(course.imgURL);
	const [createdBy, setCreatedBy] = useState(course.createdBy);
	const [link, setLink] = useState(course.link);

	// Methods
	async function onSubmit(e) {
		e.preventDefault();

		const editedCourse = {
			id: course.id,
			name: name,
			category: category.toLowerCase(),
			createdBy: createdBy,
			imgURL: imgURL,
			link: link,
			updated: new Date().toLocaleDateString(),
		};
		const isDone = updateDocument("courses", editedCourse).catch(onFail);

		if (isDone) onSucess(editedCourse);
	}

	function onSucess(editedCourse) {
		const clonedCourses = [...courses];
		const index = clonedCourses.findIndex((course) => course.id === editedCourse.id);
		clonedCourses[index] = editedCourse;
		setCourses(clonedCourses);
		setModal(null);
	}

	function onFail(error) {
		console.error(error);
		alert("Could not update the item. Try again");
	}

	return (
		<form className="edit-form" onSubmit={onSubmit}>
			<h2>Edit item</h2>
			<InputField setup={form.category} state={[category, setCategory]} />
			<InputField setup={form.name} state={[name, setName]} />
			<InputField setup={form.createdBy} state={[createdBy, setCreatedBy]} />
			<InputField setup={form.link} state={[link, setLink]} />
			<InputField setup={form.imgURL} state={[imgURL, setImgURL]} />
			<button>Edit existing item</button>
			<button onClick={() => setModal(null)}>Cancel</button>
		</form>
	);
}
