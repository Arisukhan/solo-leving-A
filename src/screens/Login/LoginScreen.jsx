import { useState } from 'react';
import styles from './LoginScreen.module.css';
import EnergyFrame from '../../components/EnergyFrame/EnergyFrame';
import TopBorder from '../../components/Borders/TopBorder';
import BottomBorder from '../../components/Borders/BottomBorder';
import SystemWindow from '../../components/SystemWindow/SystemWindow';
import { Eye, EyeOff } from 'lucide-react'; // Assuming lucide-react is available or will be added

const LoginScreen = ({ onBack, onLoginSuccess }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = () => {
        // In a real app, you'd validate credentials here
        onLoginSuccess();
    };

    return (
        <div className={styles.loginContainer}>
            <EnergyFrame>
                <TopBorder />
                <SystemWindow>
                    <h2 className={styles.title}>IDENTIFICATION</h2>

                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="USERNAME / EMAIL"
                            className={styles.inputField}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="PASSWORD"
                            className={styles.inputField}
                        />
                        <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                            {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                        </span>
                    </div>

                    <button className={styles.loginButton} onClick={handleLogin}>
                        ENTER SYSTEM
                    </button>

                    <div className={styles.forgotPassword}>
                        Forgot Password?
                    </div>
                </SystemWindow>
                <BottomBorder />
            </EnergyFrame>
        </div>
    );
};

export default LoginScreen;
