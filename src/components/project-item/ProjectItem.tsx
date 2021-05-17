import React from 'react';

const ProjectItem: React.FC = ({
  name,
  url,
  imageSrc,
}: {
  name: string;
  url: string;
  imageSrc: string;
}) => (
  <div className="col-xs-12 col-md-6 col-lg-4 p-3">
    <div className="card bg-dark text-white border-0">
      <a href={url} className="stretched-link">
        <img className="card-img" src={imageSrc} alt={`${name} Demo`} />
      </a>
    </div>
  </div>
);

export default ProjectItem;
