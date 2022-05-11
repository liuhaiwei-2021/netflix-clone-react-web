import { Link } from "react-router-dom";

export default function StudentCard({ student }) {
	const { id, name, avatar } = student;
	return (
		<Link to={`/students/${id}`}>
			<div className="card">
				<div className="card-info">
					<img className="student-card-avatar" src={avatar} alt="avatar" />
					<p className="card-title">{name}</p>
				</div>
			</div>
		</Link>
	);
}
