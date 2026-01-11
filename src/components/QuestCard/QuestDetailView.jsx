import styles from './QuestDetailView.module.css';
import { X } from 'lucide-react';

const QuestDetailView = ({ quest, onClose }) => {
    return (
        <div className={styles.detailView}>
            <button onClick={onClose} className={styles.closeButton} aria-label="Close">
                <X />
            </button>
            <h3 className={styles.title}>{quest.title}</h3>
            <p className={styles.description}>{quest.description}</p>
            <div className={styles.stats}>
                <span>XP: +{quest.xp}</span>
            </div>
        </div>
    );
};

export default QuestDetailView;
