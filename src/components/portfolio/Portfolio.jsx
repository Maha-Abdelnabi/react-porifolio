import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/water.jpg'
import Img2 from '../../assets/hike.jpg'
import Img3 from '../../assets/globe.jpg'
import Img4 from "../../assets/globe.jpg";
import Img5 from "../../assets/globe.jpg";
import Img6 from "../../assets/globe.jpg";

const data = [
  {
    id: 1,
    title: "waterUdoin",
    image: Img1,
    github: "https://github.com/CKBoytGT/waterUdoin/tree/main",
    demo: "https://waterudoin.herokuapp.com/",
  },
  {
    id: 2,
    title: "HikR",
    image: Img2,
    github: "https://github.com/bsmisson/HikR",
    demo: "https://bsmisson.github.io/HikR/",
  },
  {
    id: 3,
    title: "Project 3",
    image: Img3,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    title: "Project 4",
    image: Img4,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    title: "Project 5",
    image: Img5,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    title: "Project 6",
    image: Img6,
    github: "https://github.com",
    demo: "https://github.com",
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })
       }
      </div>
    </section>
  );
}

export default Portfolio;