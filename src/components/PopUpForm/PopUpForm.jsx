import { Form } from "../Form/Form";
import "../../styles/PopUpForm.scss";

export function PopUpForm({ onClose }) {
  return (
    <div className="popupBox-container visible">
      <div className="close-button" onClick={onClose}>
        X
      </div>
      <div className="popup-content">
        <h2>Data Deletion Request</h2>
        <Form />
       
      </div>
    </div>
  );
}
