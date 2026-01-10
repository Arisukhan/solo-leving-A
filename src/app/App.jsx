import { useState } from 'react';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';

function App() {
    const [currentScreen, setCurrentScreen] = useState('welcome');

    const navigateToLogin = () => setCurrentScreen('login');
    const navigateToWelcome = () => setCurrentScreen('welcome');

    // Simple conditional rendering (JS logic for screen transitions allowed)
    return (
        <>
            <div className="background-grid"> {/* Maybe some background effect */}</div>

            {currentScreen === 'welcome' && (
                <WelcomeScreen onStart={navigateToLogin} />
            )}

            {currentScreen === 'login' && (
                <LoginScreen onBack={navigateToWelcome} />
            )}
        </>
    );
}

export default App;
