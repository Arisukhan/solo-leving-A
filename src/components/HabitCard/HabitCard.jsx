import { useState } from 'react';
import styles from './HabitCard.module.css';

const initialHabits = [
    { text: 'Drink Water', completed: false },
    { text: 'Meditation', completed: false },
    { text: 'Read a Chapter', completed: false },
];

const HabitCard = () => {
    const [habits, setHabits] = useState(initialHabits);

    const toggleHabit = (index) => {
        const newHabits = [...habits];
        newHabits[index].completed = !newHabits[index].completed;
        setHabits(newHabits);
    };

    return (
        <div className={styles.habitCard}>
            <h3 className={styles.title}>Habit Tracker</h3>
            <div className={styles.habitGrid}>
                {habits.map((habit, index) => (
                    <div
                        key={index}
                        className={`${styles.habitItem} ${habit.completed ? styles.completed : ''}`}
                        onClick={() => toggleHabit(index)}
                    >
                        {habit.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HabitCard;
