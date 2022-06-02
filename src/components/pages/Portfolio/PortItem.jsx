import React from "react";

const PortItem = ({ project }) => {
  return (
    <div class="my-12 card w-80 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={project.img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{project.title}</h2>
        <p>{project.description}</p>

        <div class="card-actions justify-center">
          <a href={project.deployed} target="_blank">
            <button class="btn btn-primary">App</button>
          </a>
          <a href={project.repo} target="_blank">
            <button class="btn btn-primary">Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default PortItem;
