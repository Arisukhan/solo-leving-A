import styles from './TerminationScreen.module.css';

const TerminationScreen = () => {
    return (
        <div className={styles.terminationOverlay}>
            <div className={styles.terminationMessage}>
                Application Terminated
            </div>
        </div>
    );
};

export default TerminationScreen;
