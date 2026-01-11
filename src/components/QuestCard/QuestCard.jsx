import { useState } from 'react';
import styles from './QuestCard.module.css';
import { CheckSquare, Square } from 'lucide-react';

const initialQuests = [
    { text: 'Daily Shadow Exercise', xp: 25, completed: false },
    { text: 'Code for 25 mins', xp: 25, completed: false },
    { text: 'Learn 1 Concept', xp: 25, completed: false },
];

const QuestCard = () => {
    const [quests, setQuests] = useState(initialQuests);

    const toggleQuest = (index) => {
        const newQuests = [...quests];
        newQuests[index].completed = !newQuests[index].completed;
        setQuests(newQuests);
    };

    return (
        <div className={styles.questCard}>
            <h3 className={styles.title}>Daily Quests</h3>
            <ul className={styles.questList}>
                {quests.map((quest, index) => (
                    <li
                        key={index}
                        className={`${styles.questItem} ${quest.completed ? styles.completed : ''}`}
                        onClick={() => toggleQuest(index)}
                    >
                        {quest.completed ? <CheckSquare /> : <Square />}
                        <span className={styles.questText}>{quest.text}</span>
                        <span className={styles.xpBadge}>+{quest.xp} XP</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestCard;
