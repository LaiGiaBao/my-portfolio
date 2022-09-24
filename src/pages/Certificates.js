import React from "react";
import CertificateItem from "../components/CertificateItem";
import { certificateList } from "../helpers/certificateList";

import "../styles/Projects.css";

function Projects({ titleRef }) {
  return (
    <div className="projects">
      <h1 className="certificates__header" ref={titleRef}>
        My Certificates
      </h1>
      <div className="projectList">
        {certificateList.map((certificate, idx) => {
          return (
            <CertificateItem
              id={idx}
              name={certificate.name}
              image={certificate.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
