import { useEffect } from 'react';
import styles from './WarningModal.module.css';
import SystemButton from '../Buttons/SystemButton';

const WarningModal = ({ isOpen, onClose, message }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000); // 5 seconds

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
                <div className={styles.warningHeader}>
                    ⚠️ WARNING
                </div>
                <div className={styles.warningContent}>
                    {message}
                </div>
                <SystemButton onClick={onClose}>ACKNOWLEDGE</SystemButton>
            </div>
        </div>
    );
};

export default WarningModal;
