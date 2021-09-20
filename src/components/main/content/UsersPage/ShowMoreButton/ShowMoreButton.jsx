import React from 'react';
import styles from './ShowMoreButton.module.css';

export default function ShowMoreButton(props){
    return (
        <div className={styles.showMoreButtonWrapper}>
            <button className={styles.showMoreButton}>Show More</button>
        </div>
    );
}