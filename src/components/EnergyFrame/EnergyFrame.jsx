import React from 'react';
import styles from './EnergyFrame.module.css';

const EnergyFrame = ({ children }) => {
    return (
        <div className={styles.frameContainer}>
            <div className={styles.energyFrameOuter}></div>
            <div className={styles.energyFrameInner}></div>
            <div className={styles.glassPanel}></div>
            <div className={styles.innerHighlight}></div>

            <div className={styles.contentArea}>
                {children}
            </div>
        </div>
    );
};

export default EnergyFrame;
