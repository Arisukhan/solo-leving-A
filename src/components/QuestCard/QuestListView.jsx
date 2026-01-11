import { useState } from 'react';
import styles from './QuestListView.module.css';

const QuestListView = ({ category, onSelectQuest }) => {
    // In a real app, quests would be fetched based on category
    const quests = {
        CORE: [
            { title: 'Daily Shadow Exercise', xp: 25, completed: false, description: 'Complete a full workout.' },
            { title: 'Code for 25 mins', xp: 25, completed: false, description: 'Focus on a single coding task for 25 minutes.' },
        ],
        OPTIONAL: [{ title: 'Learn 1 New Concept', xp: 10, completed: false, description: 'Read an article or watch a video on a new topic.' }],
        SPECIAL: [{ title: 'Deploy a Project', xp: 100, completed: false, description: 'Deploy a personal project to a live server.' }],
    };

    const [questList, setQuestList] = useState(quests[category] || []);

    const handleComplete = (e, index) => {
        e.stopPropagation(); // Prevent opening the detail view
        const newQuestList = [...questList];
        newQuestList[index].completed = true;
        setQuestList(newQuestList);
    };

    return (
        <div className={styles.listView}>
            <h3 className={styles.title}>{category} Quests</h3>
            <ul className={styles.questList}>
                {questList.map((quest, index) => (
                    <li key={index} className={styles.questItem} onClick={() => onSelectQuest(quest)}>
                        <span className={styles.questTitle}>{quest.title}</span>
                        <span className={styles.xpValue}>+{quest.xp} XP</span>
                        <button
                            className={styles.completeButton}
                            disabled={quest.completed}
                            onClick={(e) => handleComplete(e, index)}
                        >
                            {quest.completed ? '✅' : 'COMPLETE'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestListView;
