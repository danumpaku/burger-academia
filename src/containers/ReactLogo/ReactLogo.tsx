import React from 'react';
import logo from '../../logo.svg';
import styles from './ReactLogo.module.css';

const ReactLogo = () => 
    <div className={styles.ReactLogoContainer}>
        <img src={logo} className={styles.ReactLogo} alt="React logo" />
    </div>
;

export default ReactLogo;