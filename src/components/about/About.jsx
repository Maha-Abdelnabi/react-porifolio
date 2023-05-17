import React from 'react'
import './about.css'
import Me from '../../assets/me.png'
import {FiAward} from 'react-icons/fi'
import { HiOutlineUsers } from "react-icons/hi";
import { GoProject } from "react-icons/go";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
            </article>
            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
            </article>
            <article className="about__card">
              <GoProject className="about__icon" />
              <h5>Projects</h5>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi vel! Cupiditate nemo ipsam repellat tempore ea officiis magnam asperiores qui eaque itaque. Ducimus voluptates cupiditate molestiae nemo ut fuga.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About