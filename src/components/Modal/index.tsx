import React from "react";
import Button from "../Button";
import "./styles.scss";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <div className="modal-container">
      <h1>{title}</h1>
      {children}
      <div className="buttons">
        <Button text="no, cancel" type="secondary" />
        <Button text="yes, delete" type="warning" />
      </div>
    </div>
  );
};

export default Modal;
