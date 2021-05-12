import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Projects.module.css'
const Projects = () => {
    return (

        <Container fluid >
            <Row className="p-5">
                <Col sm={12} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                    <div className={styles.project}>
                        <img className={styles.demoImg} src="https://www.savethestudent.org/uploads/start-wordpress-website.jpg" alt=""/>
                        <div className="">
                           
                            <h2 className="text-center">Book-My-Tour</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat.</p>

                            <div className="text-center">
                            <button className={`${styles.git} ${styles.linkBtn} mr-2`}>View on Github</button>
                            <button className={`${styles.live} ${styles.linkBtn}`}>View Live Site</button>
                            </div>
                            <p>Tech</p>
                            <div>
                                icons
                            </div>
                            
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className={styles.project}>
                        <img className={styles.demoImg} src="https://www.savethestudent.org/uploads/start-wordpress-website.jpg" alt=""/>
                        <div className="">
                           
                            <h2 className="text-center">Book-My-Tour</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat.</p>

                            <div className="text-center">
                            <button className={`${styles.git} ${styles.linkBtn} mr-2`}>View on Github</button>
                            <button className={`${styles.live} ${styles.linkBtn}`}>View Live Site</button>
                            </div>
                            <p>Tech</p>
                            <div>
                                icons
                            </div>
                            
                        </div>
                    </div>
                </Col>



            </Row>

            <Row className="p-5">
                <Col sm={12} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                    <div className={styles.project}>
                        <img className={styles.demoImg} src="https://www.savethestudent.org/uploads/start-wordpress-website.jpg" alt=""/>
                        <div className="">
                           
                            <h2 className="text-center">Book-My-Tour</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat.</p>

                            <div className="text-center">
                            <button className={`${styles.git} ${styles.linkBtn} mr-2`}>View on Github</button>
                            <button className={`${styles.live} ${styles.linkBtn}`}>View Live Site</button>
                            </div>
                            <p>Tech</p>
                            <div>
                                icons
                            </div>
                            
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className={styles.project}>
                        <img className={styles.demoImg} src="https://www.savethestudent.org/uploads/start-wordpress-website.jpg" alt=""/>
                        <div className="">
                           
                            <h2 className="text-center">Book-My-Tour</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat.</p>

                            <div className="text-center">
                            <button className={`${styles.git} ${styles.linkBtn} mr-2`}>View on Github</button>
                            <button className={`${styles.live} ${styles.linkBtn}`}>View Live Site</button>
                            </div>
                            <p>Tech</p>
                            <div>
                                icons
                            </div>
                            
                        </div>
                    </div>
                </Col>



            </Row>


            </Container>


    );
};

export default Projects;