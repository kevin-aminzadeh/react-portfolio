import React, { FunctionComponent } from 'react';

type ProjectCardProps = {
  name: string;
  url: string;
  imageSrc: string;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  name,
  url,
  imageSrc,
}: ProjectCardProps) => (
  <div
    className="col-xs-12 col-md-6 col-lg-4 p-3"
    style={{ minHeight: '214px' }}
  >
    <div
      className="card bg-dark text-white border-0 h-100"
      style={{ minHeight: '100%' }}
    >
      <a
        href={url}
        className="stretched-link h-100"
        style={{ paddingBottom: '56.25%' }}
      >
        <img
          className="card-img h-100"
          src={imageSrc}
          alt={`${name} Demo`}
          style={{ minHeight: '100%', position: 'absolute' }}
        />
      </a>
    </div>
  </div>
);

export default ProjectCard;
