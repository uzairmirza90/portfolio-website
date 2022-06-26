import { Container, Divider } from "@mui/material";
import React from "react";
import Project from "../../components/Project/Project";
import { projectsTab } from "../../utils/data/data";
import "../Projects/Projects.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContainerTitle from "../../components/ContainerTitle/ContainerTitle";

interface TabPanelProps {
  children?: React.ReactNode;
  index?: number;
  value?: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Projects: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "rgba(58, 173, 144, 0.837)",
            },
          }}
          textColor="inherit"
          variant="scrollable"
          allowScrollButtonsMobile={true}
        >
          {projectsTab.map((projectTab, index) => {
            return (
              <Tab
                key={index}
                icon={<img src={projectTab.tabImage} width="28px" alt='Tab'/>}
                iconPosition="start"
                label={projectTab.label}
                {...a11yProps(0)}
                sx={{ color: "var(--text-color)" }}
              />
            );
          })}
        </Tabs>
      </Box>
      <ContainerTitle title="Projects I Made" />
      <Container sx={{ width: 200, marginTop: 2 }}>
        <Divider
          sx={{ backgroundColor: "rgba(58, 173, 144, 0.837)", height: 3 }}
        />
      </Container>
      {projectsTab?.map((tab, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {tab?.projects?.map((project, i) => {
              return (
                <Project
                  key={i}
                  number={i}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              );
            })}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default Projects;
