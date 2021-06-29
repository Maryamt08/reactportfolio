import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>A little about me</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Maryam.</h4>
            <p>
            I'm a Fullstack React Developer.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better.
            </p>
          </div>
          <div className="title">
            <p className="separator" />
          </div>
          <div className="desc">
            <p>
            Paragraph about front end: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
             laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              For the back-end I work with NodeJS, Express, MongoDB, etc.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
