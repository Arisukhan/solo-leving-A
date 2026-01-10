import styles from './SystemWindow.module.css';

const SystemWindow = ({ children }) => {
    return (
        <div className={styles.windowContainer}>
            <div className={styles.glassPanel}></div>
            <div className={styles.contentLayer}>
                {children}
            </div>
        </div>
    );
};

export default SystemWindow;
