import { useState } from 'react';
import styles from './WelcomeScreen.module.css';
import EnergyFrame from '../../components/EnergyFrame/EnergyFrame';
import TopBorder from '../../components/Borders/TopBorder';
import BottomBorder from '../../components/Borders/BottomBorder';
import SystemWindow from '../../components/SystemWindow/SystemWindow';
import WarningModal from '../../components/Modals/WarningModal';

const WelcomeScreen = ({ onStart, onTerminate }) => {
    const [isWarningOpen, setWarningOpen] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');

    const handleNoClick = () => {
        let currentNoCount = parseInt(localStorage.getItem('no_click_count') || '0');
        currentNoCount++;
        localStorage.setItem('no_click_count', currentNoCount.toString());

        if (currentNoCount === 1) {
            setWarningMessage('Refusing the system will result in termination.');
            setWarningOpen(true);
        } else if (currentNoCount === 2) {
            setWarningMessage('Further refusal will terminate the application.');
            setWarningOpen(true);
        } else if (currentNoCount >= 3) {
            localStorage.setItem('app_terminated', 'true');
            onTerminate();
        }
    };

    const closeWarning = () => {
        setWarningOpen(false);
    };

    return (
        <>
            <div className={styles.screenContainer}>
                <EnergyFrame>
                    <TopBorder />
                    <SystemWindow>
                        {/* Notification Header */}
                        <div className={styles.notificationHeader}>
                            <div className={styles.notificationIcon}>!</div>
                            <div className={styles.notificationTitle}>Notification</div>
                        </div>

                        {/* Message Content */}
                        <div className={styles.messageContent}>
                            <p className={styles.messageLine}>
                                You have acquired the qualifications
                            </p>
                            <p className={styles.messageLine}>
                                to be a <span className={styles.highlight}>Player</span>. Will you accept?
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className={styles.buttonContainer}>
                            <button className={`${styles.actionButton} ${styles.primary}`} onClick={onStart}>
                                YES
                            </button>
                            <button className={styles.actionButton} onClick={handleNoClick}>
                                NO
                            </button>
                        </div>
                    </SystemWindow>
                    <BottomBorder />
                </EnergyFrame>
            </div>
            <WarningModal
                isOpen={isWarningOpen}
                onClose={closeWarning}
                message={warningMessage}
                count={parseInt(localStorage.getItem('no_click_count') || '0')}
            />
        </>
    );
};

export default WelcomeScreen;
