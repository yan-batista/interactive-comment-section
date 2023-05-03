import React from "react";

import Button from "../Button";
import "./styles.scss";

interface Props {
  title: string;
  children: React.ReactNode;
  showModal: boolean; // modal state
  hideModal: () => void; // change modal state to false
}

const Modal: React.FC<Props> = ({ title, children, showModal, hideModal }: Props) => {
  return (
    <div className={`modal-overlay-container`}>
      {showModal && (
        <>
          <div className="overlay"></div>
          <div className="modal-container">
            <h1>{title}</h1>
            <p>{children}</p>
            <div className="buttons">
              <Button text="no, cancel" type="secondary" handleClick={hideModal} />
              <Button text="yes, delete" type="warning" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
