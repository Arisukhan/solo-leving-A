import { useState } from 'react';
import styles from './LoginScreen.module.css';
import EnergyFrame from '../../components/EnergyFrame/EnergyFrame';
import TopBorder from '../../components/Borders/TopBorder';
import BottomBorder from '../../components/Borders/BottomBorder';
import SystemWindow from '../../components/SystemWindow/SystemWindow';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginScreen = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple validation, in a real app this would be more robust
        if (username.trim() !== '' && password.trim() !== '') {
            localStorage.setItem('auth_token', 'dummy_token');
            onLoginSuccess();
        } else {
            // Optional: Add some feedback for empty fields
            alert('Username and password cannot be empty.');
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={styles.loginContainer}>
            <EnergyFrame>
                <TopBorder />
                <SystemWindow>
                    <h2 className={styles.title}>LOGIN</h2>
                    <form onSubmit={handleLogin} className={styles.loginForm}>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                placeholder="Username or Email"
                                className={styles.inputField}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                placeholder="Password"
                                className={styles.inputField}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className={styles.visibilityToggle}
                            >
                                {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <motion.button
                            type="submit"
                            className={styles.loginButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ENTER SYSTEM
                        </motion.button>

                        <a href="#" className={styles.forgotPassword}>
                            Forgot Password?
                        </a>
                    </form>
                </SystemWindow>
                <BottomBorder />
            </EnergyFrame>
        </div>
    );
};

export default LoginScreen;
