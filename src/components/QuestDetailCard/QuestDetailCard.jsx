import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './QuestDetailCard.module.css';

const QuestDetailCard = ({ quest, onClose }) => {
    return (
        <AnimatePresence>
            {quest && (
                <motion.div
                    className={styles.backdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={styles.detailCard}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <header className={styles.header}>
                            <h2>{quest.title}</h2>
                            <button className={styles.closeButton} onClick={onClose} aria-label="Close detail view"><X /></button>
                        </header>
                        <div className={styles.content}>
                            <p><strong>Description:</strong> {quest.description}</p>
                            <p><strong>How to do:</strong> {quest.howToDo}</p>
                            <div className={styles.footer}>
                                <span className={styles.xp}>+{quest.xp} XP</span>
                                <div className={styles.stats}>
                                    {quest.stats.map(stat => (
                                        <span key={stat} className={styles.statTag}>{stat}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default QuestDetailCard;
