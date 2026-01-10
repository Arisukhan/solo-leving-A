import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import TerminatedScreen from '../screens/Terminated/TerminatedScreen';
import HomeScreen from '../screens/Home/HomeScreen';

function App() {
    const [currentScreen, setCurrentScreen] = useState('welcome');
    const [isTerminated, setIsTerminated] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const terminated = localStorage.getItem('appTerminated');
        if (terminated === 'true') {
            setIsTerminated(true);
            return;
        }

        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const navigateToLogin = () => setCurrentScreen('login');
    const navigateToWelcome = () => setCurrentScreen('welcome');

    const handleLogin = () => {
        localStorage.setItem('authToken', 'dummy-token');
        setIsAuthenticated(true);
    };

    if (isTerminated) {
        return <TerminatedScreen />;
    }

    if (isAuthenticated) {
        return <HomeScreen />;
    }

    const screenVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <>
            <div className="background-grid"></div>

            <AnimatePresence mode="wait">
                {currentScreen === 'welcome' && (
                    <motion.div
                        key="welcome"
                        variants={screenVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        <WelcomeScreen onStart={navigateToLogin} />
                    </motion.div>
                )}

                {currentScreen === 'login' && (
                    <motion.div
                        key="login"
                        variants={screenVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        <LoginScreen onBack={navigateToWelcome} onLoginSuccess={handleLogin} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;
