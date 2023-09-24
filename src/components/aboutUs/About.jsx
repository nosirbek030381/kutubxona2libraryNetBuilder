import React from 'react';
import './About.css';
import aboutImg from '../../image/about-img.jpg';
import Header from '../header/Header';

const About = () => {
  return (
    <>
      <Header />

      <section className="about">
        <div className="container">
          <div className="row">
            <h2 className="fs-1 mb-4 text-uppercase fw-bold">About</h2>
            <div className="col-md-6">
              <div className="about-img">
                <img src={aboutImg} alt="about" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-text">
                <h2>About Library UBTUIT</h2>
                <p>
                  I am a Full Stack Web Developer with a passion for learning
                  new technologies. I have experience working with Javascript,
                  HTML, CSS, React, Node, Express, and MongoDB.
                </p>
                <p>
                  I am currently working as a Full Stack Web Developer with a
                  passion for learning new technologies. I have experience
                  working with Javascript, HTML, CSS, React, Node, Express, and
                  MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
