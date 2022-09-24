import React from "react";
import { useParams } from "react-router-dom";
import { certificateList } from "../helpers/certificateList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function CertificateDisplay() {
  const { id } = useParams();
  const certificate = certificateList[id];
  return (
    <div className="project">
      <h1> {certificate.name}</h1>
      <img src={certificate.image} />
      {certificate.skills ? (
        <p>
          <b>Skills:</b> {certificate.skills}
        </p>
      ) : (
        <p></p>
      )}

      <div className="icon">
        <GitHubIcon />
      </div>
    </div>
  );
}

export default CertificateDisplay;
