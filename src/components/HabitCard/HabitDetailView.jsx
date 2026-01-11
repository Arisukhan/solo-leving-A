import styles from './HabitDetailView.module.css';
import { X } from 'lucide-react';

const HabitDetailView = ({ habit, onClose }) => {
    return (
        <div className={styles.detailView}>
            <button onClick={onClose} className={styles.closeButton}>
                <X />
            </button>
            <h3 className={styles.title}>{habit.title}</h3>
            <p className={styles.description}>{habit.description}</p>
        </div>
    );
};

export default HabitDetailView;
