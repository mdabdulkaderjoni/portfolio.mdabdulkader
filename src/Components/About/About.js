import React from 'react';
import { Col, Row } from 'react-bootstrap';
import profile from './profile.jpg'
import styles from './About.module.css'
const About = () => {
    return (
        <Row>
            <Col sm={12} md={12} lg={6}>
                <div className={styles.profileImg}>
                    <img src={profile} alt="" />
                </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
                <div>
                   <h1> Hi, I'm Md. Abdul Kader</h1>
                   <h3>Mern Stack Developer</h3>
                   <h3>A Programmer</h3>
                </div>
            </Col>
        </Row>
            
 
    );
};

export default About;