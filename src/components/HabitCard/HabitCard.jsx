import { useState, useEffect } from 'react';
import styles from './HabitCard.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import HabitListView from './HabitListView';
import HabitDetailView from './HabitDetailView';

const HabitCard = ({ isOpen, onClick }) => {
    const [view, setView] = useState('entry'); // entry, list, detail
    const [selectedHabit, setSelectedHabit] = useState(null);

    useEffect(() => {
        if (isOpen) {
            setView('list');
        } else {
            // Reset state when the card is closed
            setTimeout(() => {
                setView('entry');
                setSelectedHabit(null);
            }, 300); // Delay to allow for exit animation
        }
    }, [isOpen]);

    const handleSelectHabit = (habit) => {
        setSelectedHabit(habit);
        setView('detail');
    };

    const handleCloseDetail = () => {
        setView('list');
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className={`${styles.habitCardWrapper} ${isOpen ? styles.open : ''}`} onClick={!isOpen ? onClick : null}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.habitCard}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {view === 'list' && <HabitListView onSelectHabit={handleSelectHabit} />}
                        {view === 'detail' && <HabitDetailView habit={selectedHabit} onClose={handleCloseDetail} />}
                    </motion.div>
                )}
            </AnimatePresence>
            {!isOpen && <h3 className={styles.entryTitle}>Habits</h3>}
        </div>
    );
};

export default HabitCard;
