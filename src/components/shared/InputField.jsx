export default function InputField({ setup, state }) {
	const { label, placeholder, type, required } = setup;
	const [value, setValue] = state;

	return (
		<div className="form-input">
			<label className="form-label">{label}</label>
			<input
				className="form-text"
				type={type}
				placeholder={placeholder}
				value={value}
				required={required}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}
