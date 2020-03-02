import React from "react";

function ProjectDetail(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            tempora sit perferendis porro! Beatae eveniet temporibus unde illum
            tenetur, iusto veniam quisquam, iure earum corrupti voluptate ea
            quaerat! Dolor, veniam?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
