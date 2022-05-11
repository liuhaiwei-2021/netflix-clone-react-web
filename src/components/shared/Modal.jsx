// NPM packages
import { createPortal } from "react-dom";
// Project files
import { useModal } from "../../state/ModalContext";
import "../../styles/Modal.css";

export default function Modal() {
	const { modal, setModal } = useModal();

	// Safeguard
	if (modal === null) return null;

	return createPortal(
		<div className="modal">
			<div className="modal-bg">{/* empty on purpose */}</div>
			<div className="modal-content">{modal}</div>
		</div>,
		document.getElementById("portal")
	);
}
