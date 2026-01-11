import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './QuestSection.module.css';

const QuestSection = ({ title, quests, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <section className={styles.questSection}>
            <header className={styles.header} onClick={toggleCollapse}>
                <h2>{title}</h2>
                <motion.div
                    animate={{ rotate: isCollapsed ? -90 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </header>
            <AnimatePresence>
                {!isCollapsed && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={styles.content}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default QuestSection;
