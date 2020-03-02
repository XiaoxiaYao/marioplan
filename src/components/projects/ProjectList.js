import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  const projectSummaries = projects.map(project => {
    return <ProjectSummary project={project} key={project.id} />;
  });

  return <div className="project-list section">{projectSummaries}</div>;
};

export default ProjectList;
