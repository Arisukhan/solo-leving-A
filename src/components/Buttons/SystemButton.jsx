import styles from './SystemButton.module.css';

const SystemButton = ({ children, onClick }) => {
    return (
        <button className={styles.buttonContainer} onClick={onClick}>
            <div className={styles.buttonBg}></div>
            <div className={styles.buttonBorder}></div>
            <span className={styles.buttonText}>{children}</span>
        </button>
    );
};

export default SystemButton;
