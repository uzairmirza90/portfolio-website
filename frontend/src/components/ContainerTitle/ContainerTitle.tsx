import React from "react";
import { ContainerTitleInterface } from "../../utils/interfaces/interfaces";
import '../ContainerTitle/ContainerTitle.scss'

const ContainerTitle: React.FC<ContainerTitleInterface> = ({ title }) => {
  return (
    <div className="heading-container">
      <p className="heading-text">{title}</p >
    </div>
  );
};

export default ContainerTitle;
