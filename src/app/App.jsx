import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import TerminationScreen from '../screens/Termination/TerminationScreen';

function App() {
    const [screen, setScreen] = useState('welcome');

    useEffect(() => {
        const isTerminated = localStorage.getItem('app_terminated') === 'true';
        const authToken = localStorage.getItem('auth_token');

        if (isTerminated) {
            setScreen('terminated');
        } else if (authToken) {
            setScreen('home');
        } else {
            setScreen('welcome');
        }
    }, []);

    const navigateToLogin = () => setScreen('login');
    const navigateToHome = () => setScreen('home');
    const handleTermination = () => setScreen('terminated');

    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5,
    };

    return (
        <>
            <div className="background-grid" />
            <AnimatePresence mode="wait">
                {screen === 'terminated' && <TerminationScreen />}
                {screen === 'welcome' && (
                    <motion.div
                        key="welcome"
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        <WelcomeScreen onStart={navigateToLogin} onTerminate={handleTermination} />
                    </motion.div>
                )}
                {screen === 'login' && (
                    <motion.div
                        key="login"
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        <LoginScreen onLoginSuccess={navigateToHome} />
                    </motion.div>
                )}
                {screen === 'home' && (
                     <motion.div
                        key="home"
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                    >
                        <HomeScreen />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;
