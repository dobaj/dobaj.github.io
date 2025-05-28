import type { ReactNode } from "react";
import "./Project.css";

export const Project = ({
  title,
  photos,
  technologies,
  description,
}: {
  title: string | string[]; // Either title or [title, url]
  photos: string[][]; // Array with sub arrays of the form [imgSrc, imgAlt]
  technologies: string[][]; // Array with sub arrays of the form [imgSrc, imgAlt]
  description: ReactNode;
}) => {
  return (
    <div className="project">
      {typeof title === "string" ? (
        <h2>{title}</h2>
      ) : (
        <a target="_blank" href={title[1]}>
          <h2>{title[0]}</h2>
        </a>
      )}
      <div className="indent">
        <div className="photos">
          {photos.map(([imgSrc, imgAlt], i) => (
            <img key={i} src={imgSrc} alt={imgAlt} />
          ))}
        </div>
        <h3>Description</h3>
        <div className="dimText">{description}</div>
        <h3>Technologies</h3>
        <div className="technologies">
          {technologies.map(([imgSrc, imgAlt], i) => (
            <img key={i} src={imgSrc} alt={imgAlt} title={imgAlt} />
          ))}
        </div>
      </div>
    </div>
  );
};
