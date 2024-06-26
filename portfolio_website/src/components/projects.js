// Projects.js
import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h1>My projects</h1>
      <ul>
        <li>
          <img src="project1.jpg" alt="Project 1" />
          <h2>Project 1</h2>
          <p>Description of Project 1.</p>
        </li>
        <li>
          <img src="project2.jpg" alt="Project 2" />
          <h2>Project 2</h2>
          <p>Description of Project 2.</p>
        </li>
      </ul>
    </div>
  );
}

export default Projects;