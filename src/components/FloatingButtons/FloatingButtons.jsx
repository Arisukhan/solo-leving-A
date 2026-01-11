import styles from './FloatingButtons.module.css';
import { Settings, Backpack } from 'lucide-react';

const FloatingButtons = () => {
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.floatingButton}>
                <Settings />
            </button>
            <button className={styles.floatingButton}>
                <Backpack />
            </button>
        </div>
    );
};

export default FloatingButtons;
