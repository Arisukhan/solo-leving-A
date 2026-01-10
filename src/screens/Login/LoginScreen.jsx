import { useState } from 'react';
import styles from './LoginScreen.module.css';
import EnergyFrame from '../../components/EnergyFrame/EnergyFrame';
import TopBorder from '../../components/Borders/TopBorder';
import BottomBorder from '../../components/Borders/BottomBorder';
import SystemWindow from '../../components/SystemWindow/SystemWindow';
import SystemButton from '../../components/Buttons/SystemButton';
import WarningModal from '../../components/Modals/WarningModal';

const LoginScreen = ({ onBack }) => {
    const [showWarning, setShowWarning] = useState(false);
    const [clicks, setClicks] = useState(0);

    const handleLogin = () => {
        // Logic allowed: Warning counter
        const newClicks = clicks + 1;
        setClicks(newClicks);
        if (newClicks % 2 !== 0) {
            setShowWarning(true);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <EnergyFrame>
                <TopBorder />
                <SystemWindow>
                    <h2 style={{ color: 'var(--anime-cyan)', marginBottom: '30px' }}>IDENTIFICATION</h2>
                    <input type="text" placeholder="AGENT ID" className={styles.inputField} />
                    <input type="password" placeholder="ACCESS KEY" className={styles.inputField} />

                    <div style={{ display: 'flex' }}>
                        <SystemButton onClick={handleLogin}>AUTHENTICATE</SystemButton>
                        <SystemButton onClick={onBack}>ABORT</SystemButton>
                    </div>

                    <div className={styles.statusText}>
                        SYSTEM STATUS: NORMAL
                    </div>
                </SystemWindow>
                <BottomBorder />
            </EnergyFrame>

            <WarningModal
                isOpen={showWarning}
                onClose={() => setShowWarning(false)}
                message="UNAUTHORIZED ACCESS DETECTED"
                count={clicks}
            />
        </div>
    );
};

export default LoginScreen;
