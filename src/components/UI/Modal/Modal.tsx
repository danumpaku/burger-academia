import React, { ReactNode } from 'react';
import styles from './Modal.module.css';

const Modal = (props: {children?: ReactNode}) => 
    <div className = {styles.Modal}>
        {props.children}
    </div>
;

export default Modal;

