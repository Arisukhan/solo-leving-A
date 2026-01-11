import { useState } from 'react';
import styles from './HabitListView.module.css';

const HabitListView = ({ onSelectHabit }) => {
    const habits = [
        { title: 'Drink Water', description: 'Stay hydrated.' },
        { title: 'Meditation', description: 'Clear your mind.' },
        { title: 'Read a Chapter', description: 'Expand your knowledge.' },
    ];

    const [completedHabits, setCompletedHabits] = useState([]);

    const handleDone = (e, index) => {
        e.stopPropagation();
        setCompletedHabits([...completedHabits, index]);
    };

    return (
        <div className={styles.listView}>
            <h3 className={styles.title}>Habits</h3>
            <ul className={styles.habitList}>
                {habits.map((habit, index) => (
                    <li key={index} className={styles.habitItem} onClick={() => onSelectHabit(habit)}>
                        <span>{habit.title}</span>
                        <button
                            disabled={completedHabits.includes(index)}
                            onClick={(e) => handleDone(e, index)}
                        >
                            {completedHabits.includes(index) ? '✅' : 'DONE'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HabitListView;
