import { useState, useEffect } from 'react';
import styles from './QuestCard.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import QuestCategoryView from './QuestCategoryView';
import QuestListView from './QuestListView';
import QuestDetailView from './QuestDetailView';

const QuestCard = ({ isOpen, onClick }) => {
    const [view, setView] = useState('entry'); // entry, category, list, detail
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedQuest, setSelectedQuest] = useState(null);

    useEffect(() => {
        if (isOpen) {
            setView('category');
        } else {
            // Reset state when the card is closed
            setTimeout(() => {
                setView('entry');
                setSelectedCategory(null);
                setSelectedQuest(null);
            }, 300); // Delay to allow for exit animation
        }
    }, [isOpen]);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setView('list');
    };

    const handleSelectQuest = (quest) => {
        setSelectedQuest(quest);
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
        <div className={`${styles.questCardWrapper} ${isOpen ? styles.open : ''}`} onClick={!isOpen ? onClick : null}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.questCard}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {view === 'category' && <QuestCategoryView onSelectCategory={handleSelectCategory} />}
                        {view === 'list' && <QuestListView category={selectedCategory} onSelectQuest={handleSelectQuest} />}
                        {view === 'detail' && <QuestDetailView quest={selectedQuest} onClose={handleCloseDetail} />}
                    </motion.div>
                )}
            </AnimatePresence>
            {!isOpen && <h3 className={styles.entryTitle}>Daily Quests</h3>}
        </div>
    );
};

export default QuestCard;
