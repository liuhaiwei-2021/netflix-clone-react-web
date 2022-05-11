import { useEffect } from "react";

//Project files
import { useStudents } from "../../state/StudentsContext";
import useFetch from "../../hooks/useFetch";
import Loader from "../../scripts/Loader";
import Error from "../shared/Error";
import StudentCard from "./StudentCard";

export default function StudentList() {
	//Global state
	const { students, setStudents } = useStudents();
	const { data: users, loading, error } = useFetch("users");

	useEffect(() => {
		const studentsArr = users.filter((user) => user.isTeacher === false);
		setStudents(studentsArr);
	}, [users]);

	const Students = students.map((student, index) => (
		<StudentCard key={index} student={student} />
	));

	return (
		<div className="list">
			{loading && <Loader />}
			{error && <Error />}
			<h4>Student List</h4>
			<div className="card-group">{Students}</div>
		</div>
	);
}
