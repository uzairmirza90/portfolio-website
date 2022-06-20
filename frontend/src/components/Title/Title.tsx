import React from "react";
import { TitleInterface } from "../../utils/interfaces/interfaces";
import "../Title/Title.scss";

const Title: React.FC<TitleInterface> = ({ text }) => {
  return (
    <div className="title">
      <p className="title-text">
        {text.slice(0, 6)}
        <span className="lio">
          {text.slice(6, 9)}.
        </span>
      </p>
    </div>
  );
};

export default Title;
