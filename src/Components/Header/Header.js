import React from 'react';
import { GreatThings} from 'moving-letters'
import styles from './Header.module.css'
import headImg from './headImg.gif'

const Header = () => {
    
   
    return (
        <div className={styles.headDiv}>
            

            <React.Fragment>
                <div className={styles.textDiv}>
                
                <div className={styles.childText}><GreatThings text="Hello, I'm Md Abdul Kader" /></div>
                <div className={styles.childText}><GreatThings text="Front-end Web Developer" /></div>
                </div>
            </React.Fragment>
            <div className={styles.btnDiv}>
                
                <img src={headImg} clasName={styles.headingImg} alt="" />
                <button class={styles.resumeBtn}>Download Resume</button>
            </div>
            
        </div>
    );
};

export default Header;