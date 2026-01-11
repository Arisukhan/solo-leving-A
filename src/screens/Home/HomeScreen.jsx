import styles from './HomeScreen.module.css';
import HudPanel from '../../components/HudPanel/HudPanel';
import VerticalNav from '../../components/VerticalNav/VerticalNav';
import FloatingButtons from '../../components/FloatingButtons/FloatingButtons';
import QuestCard from '../../components/QuestCard/QuestCard';
import HabitCard from '../../components/HabitCard/HabitCard';

const HomeScreen = () => {
    return (
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
                <QuestCard />
            </div>
            <div className={styles.habitCard}>
                <HabitCard />
            </div>
        </div>
    );
};

export default HomeScreen;
