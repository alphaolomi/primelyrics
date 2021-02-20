import React from "react";
import { GitHub } from "react-feather";

const About = () => {
  return (
    <div>
      <div className="row">
        <h1>About</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          perferendis dolores exercitationem sapiente corrupti ab sit? Rem
          pariatur quo, quam nulla minima inventore nisi ratione ipsam ab
          accusantium maxime illum!
        </p>
      </div>

      <div className="row">
        <h1>License</h1>
        <p className="lead">This project is licensed under MIT License</p>
      </div>
      <div className="row">
        <h3>
          Project source code at GitHub <GitHub />
        </h3>
      </div>
    </div>
  );
};
export default About;
