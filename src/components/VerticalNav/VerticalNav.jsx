import styles from './VerticalNav.module.css';
import { Home, Library, GitMerge, LineChart, Settings } from 'lucide-react';

const navItems = [
    { icon: <Home />, label: 'Home' },
    { icon: <Library />, label: 'Quest Library' },
    { icon: <GitMerge />, label: 'Skill Tree' },
    { icon: <LineChart />, label: 'Track Logs' },
    { icon: <Settings />, label: 'System Menu' },
];

const VerticalNav = () => {
    return (
        <nav className={styles.verticalNav}>
            {navItems.map((item, index) => (
                <a href="#" key={index} className={`${styles.navItem} ${index === 0 ? styles.active : ''}`}>
                    {item.icon}
                </a>
            ))}
        </nav>
    );
};

export default VerticalNav;
