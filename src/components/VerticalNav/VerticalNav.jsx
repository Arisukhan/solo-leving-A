import styles from './VerticalNav.module.css';
import { Home, Library, GitMerge, LineChart, Settings } from 'lucide-react';

const VerticalNav = ({ onNavigateToHome, onNavigateToQuestLibrary, activeScreen }) => {
    const navItems = [
        { icon: <Home />, label: 'Home', action: onNavigateToHome, screen: 'home' },
        { icon: <Library />, label: 'Quest Library', action: onNavigateToQuestLibrary, screen: 'questLibrary' },
        { icon: <GitMerge />, label: 'Skill Tree', screen: 'skillTree' },
        { icon: <LineChart />, label: 'Track Logs', screen: 'trackLogs' },
        { icon: <Settings />, label: 'System Menu', screen: 'systemMenu' },
    ];

    return (
        <nav className={styles.verticalNav}>
            {navItems.map((item, index) => (
                <a
                    href="#"
                    key={index}
                    className={`${styles.navItem} ${activeScreen === item.screen ? styles.active : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        if (item.action) {
                            item.action();
                        }
                    }}
                >
                    {item.icon}
                </a>
            ))}
        </nav>
    );
};

export default VerticalNav;
