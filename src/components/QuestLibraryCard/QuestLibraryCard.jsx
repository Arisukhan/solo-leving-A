import { Edit, Trash2, Lock } from 'lucide-react';
import styles from './QuestLibraryCard.module.css';

const categoryStyles = {
    Core: styles.core,
    Optional: styles.optional,
    Special: styles.special,
};

const QuestLibraryCard = ({ quest, onEdit, onDelete, onSelect }) => {
    return (
        <div className={`${styles.questCard} ${categoryStyles[quest.category]}`} onClick={() => onSelect(quest)}>
            <div className={styles.cardContent}>
                <h3 className={styles.title}>{quest.title}</h3>
                <div className={styles.xpBadge}>+{quest.xp} XP</div>
            </div>
            <div className={styles.actions}>
                {quest.isActive && <Lock size={18} className={styles.lockIcon} />}
                <button
                    className={styles.actionButton}
                    onClick={(e) => { e.stopPropagation(); onEdit(quest); }}
                    aria-label={`Edit ${quest.title}`}
                >
                    <Edit size={18} />
                </button>
                <button
                    className={styles.actionButton}
                    onClick={(e) => { e.stopPropagation(); onDelete(quest); }}
                    disabled={quest.isActive}
                    aria-label={`Delete ${quest.title}`}
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
};

export default QuestLibraryCard;
