import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  /*
  the useState returns an array of two elements, a variable and a function to set that variable.
  the initial value of the returned variable (modalIsOpen) is the same value that was passed to useState (false)
  */
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteBtnHandler() {
    console.log("trying to delete " + props.text);
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteBtnHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
