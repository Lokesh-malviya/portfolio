import React from 'react'
import img1 from '../../assets/pro1.png';
import img2 from '../../assets/url.jpg'
import './projects.css';
import Data from './Data';
import Works from './Works';
const Projects = () => {
 
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Things for Showcase</span>
      <Works />
    </section>
  )
}

export default Projects
