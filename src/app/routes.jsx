import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';

export const ROUTES = {
    WELCOME: {
        path: '/',
        component: WelcomeScreen,
    },
    LOGIN: {
        path: '/login',
        component: LoginScreen,
    },
};
