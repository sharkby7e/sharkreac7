import React from "react";
import sid from "../../images/sidAndCats.png";
import resume from "../../images/resume.pdf";

const AboutMe = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={sid}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="sid and cats"
        />
        <div>
          <h1 class="text-5xl font-bold">Sid Quinsaat</h1>
          <p class="py-6">
            A determined and eternal lover of learning. Looking to find the
            answers hidden within the problems. Ravenously subsuming all that
            they can into an ever-expanding library of tools, solutions, and
            neat projects.
          </p>
          <a href="/sharkreac7/portfolio">
            <button class="btn btn-primary">View Portfolio</button>
          </a>
          <a href={resume} target="_blank">
            <button class="btn btn-primary">View Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
