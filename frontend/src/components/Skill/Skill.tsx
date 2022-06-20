import React from "react";
import { SkillInterface } from "../../utils/interfaces/interfaces";
import "../Skill/Skill.scss";
import { Skeleton } from "@mui/material";

const Skill: React.FC<SkillInterface> = ({ image, text, rating }) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={310}
          height={118}
          sx={{bgcolor: 'var(--container-color)'}}
        />
      ) : (
        <div className="skill">
          <div className="skill-image-container">
            <img src={image} className="skill-image" alt="skill" />
          </div>
          <div className="text-and-rating">
            <p className="skill-text">{text}</p>
            <progress id="file" value={rating} max="100">
              {" "}
            </progress>
          </div>
        </div>
      )}
    </>
  );
};

export default Skill;
