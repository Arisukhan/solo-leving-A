import styles from './WarningModal.module.css';
import SystemButton from '../Buttons/SystemButton';

const WarningModal = ({ isOpen, onClose, message, count }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
                <div className={styles.warningHeader}>
                    WARNING // SYSTEM ERROR
                </div>
                <div className={styles.warningContent}>
                    {message} <br />
                    Errors Detected: {count}
                </div>
                <SystemButton onClick={onClose}>ACKNOWLEDGE</SystemButton>
            </div>
        </div>
    );
};

export default WarningModal;
