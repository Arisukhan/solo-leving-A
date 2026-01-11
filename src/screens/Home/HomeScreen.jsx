
e to the System.
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
