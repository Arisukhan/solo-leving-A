import { useState } from 'react';
import styles from './WelcomeScreen.module.css';
import EnergyFrame from '../../components/EnergyFrame/EnergyFrame';
import TopBorder from '../../components/Borders/TopBorder';
import BottomBorder from '../../components/Borders/BottomBorder';
import SystemWindow from '../../components/SystemWindow/SystemWindow';
import NoWarningModal from '../../components/Modals/NoWarningModal';

const WelcomeScreen = ({ onStart }) => {
    const [noClicks, setNoClicks] = useState(0);
    const [showWarning, setShowWarning] = useState(false);

    const handleNoClick = () => {
        const newClicks = noClicks + 1;
        setNoClicks(newClicks);

        if (newClicks <= 2) {
            setShowWarning(true);
        } else {
            localStorage.setItem('appTerminated', 'true');
            window.location.reload(); // Trigger termination check in App.jsx
        }
    };

    const handleCloseWarning = () => {
        setShowWarning(false);
    };

    return (
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

            <NoWarningModal
                isOpen={showWarning}
                onClose={handleCloseWarning}
                strike={noClicks}
            />
        </div>
    );
};

export default WelcomeScreen;
