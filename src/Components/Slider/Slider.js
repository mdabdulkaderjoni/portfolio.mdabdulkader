import React from 'react';
import { Carousel } from 'react-bootstrap';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import styles from './Slider.module.css'

const Slider = () => {
  return (
    
      <Carousel fade className={styles.carousel}>
      <Carousel.Item interval={6000}>
        <div className={`${styles.division}`}>     
          <Header></Header>
        </div>

      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Projects></Projects>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Skills></Skills>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <About></About>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Contact></Contact>
      </Carousel.Item>
    </Carousel>

  );
};

export default Slider;