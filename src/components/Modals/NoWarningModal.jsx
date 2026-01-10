import { useEffect } from 'react';
import styles from './WarningModal.module.css'; // Reusing the same CSS for consistency

const NoWarningModal = ({ isOpen, onClose, strike }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000); // Auto-closes after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const getWarningMessage = () => {
        if (strike === 1) {
            return 'Refusing the system will result in termination.';
        }
        if (strike === 2) {
            return 'Further refusal will terminate the application.';
        }
        return '';
    };

    return (
        <div className={styles.modalOverlay} data-testid="no-warning-modal">
            <div className={styles.modalWindow}>
                <div className={styles.warningHeader}>
                    {strike === 1 ? '⚠️ WARNING' : '⚠️ FINAL WARNING'}
                </div>
                <div className={styles.warningContent}>
                    {getWarningMessage()}
                </div>
            </div>
        </div>
    );
};

export default NoWarningModal;
