import React from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './Skills.module.css'
const Skills = () => {
    return (
        <div className={styles.mainDiv}>
            <h1>My Skills</h1>
            <div className={styles.skillHead}></div>
            <Row className={styles.box}>
                <Col sm={12} md={6} lg={6}>
                    <div  className={styles.skill}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, atque molestias? Deserunt quaerat magni, aut animi harum culpa cum nostrum!
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                <div  className={styles.skill}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, atque molestias? Deserunt quaerat magni, aut animi harum culpa cum nostrum!
                    </div>
                </Col>
               
            </Row> 
         
        </div>
    );
};

export default Skills;