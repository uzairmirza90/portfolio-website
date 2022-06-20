import React from "react";
import { Container, Box } from "@mui/material";
import "../Project/Project.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { Skeleton } from "@mui/material";

interface ProjectProps {
  image?: string;
  title?: string;
  description?: string;
  technologies?: string[];
  number: number;
}

const Project: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  technologies,
  number,
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {loading ? (
        <Skeleton
        animation="wave"
        variant="rectangular"
        width={'60%'}
        height={170}
        sx={{bgcolor: 'var(--container-color)', marginTop: 5}}
      />
      ) : (
        <Container maxWidth="md">
          <div className="project">
            <div className="project-number-container">
              <p className="project-number">{number + 1}.</p>
            </div>
            <div className="project-details">
              <p className="project-title">{title}</p>
              {technologies?.map((technology, index) => {
                return <li key={index}>{technology}</li>;
              })}
              <p className="project-description">
                <li>{description}</li>
              </p>
            </div>
          </div>
        </Container>
      )}
    </Box>
  );
};

export default Project;
