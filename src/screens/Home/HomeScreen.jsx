import { useState } from 'react';
import styles from './HomeScreen.module.css';
import HudPanel from '../../components/HudPanel/HudPanel';
import VerticalNav from '../../components/VerticalNav/VerticalNav';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import QuestCard from '../../components/QuestCard/QuestCard';
import HabitCard from '../../components/HabitCard/HabitCard';

const HomeScreen = () => {
    const [activeCard, setActiveCard] = useState(null); // null, 'quest', 'habit'

    const handleCardClick = (card) => {
        if (activeCard === card) {
            setActiveCard(null);
        } else {
            setActiveCard(card);
        }
    };

    const handleBackdropClick = () => {
        setActiveCard(null);
    };

    return (
        <>
            {activeCard && <div className={styles.backdrop} onClick={handleBackdropClick} />}
            <div className={styles.homeScreen}>
                <div className={styles.nav}>
                    <VerticalNav />
                </div>
                <div className={styles.hud}>
                    <HudPanel />
                </div>
                <div className={styles.buttons}>
                    <FloatingButtons />
                </div>
                <div className={styles.questCard}>
                    <QuestCard isOpen={activeCard === 'quest'} onClick={() => handleCardClick('quest')} />
                </div>
                <div className={styles.habitCard}>
                    <HabitCard isOpen={activeCard === 'habit'} onClick={() => handleCardClick('habit')} />
                </div>
            </div>
        </>
    );
};

export default HomeScreen;
