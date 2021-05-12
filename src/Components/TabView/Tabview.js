import React from 'react';

import NavigationBar from '../NavigationBar/NavigationBar';
import Slider from '../Slider/Slider';
import styles from './TabView.module.css'
const Tabview = () => {
    return (
        // <div class="monitor container d-flex ">
        <div className={styles.main}>
            <div class={styles.monitor}>
                
                <div class={styles.viewport}>
                    <NavigationBar></NavigationBar>
                    <Slider className={styles.slide}></Slider>
                </div>
            </div>
        </div>
    );
};

export default Tabview;