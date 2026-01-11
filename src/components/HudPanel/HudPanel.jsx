import styles from './HudPanel.module.css';

const HudPanel = () => {
    return (
        <div className={styles.hudPanel}>
            <div className={styles.profilePic}></div>
            <div className={styles.playerInfo}>
                <span className={styles.level}>LVL 6</span>
                <div className={styles.xpBar}>
                    <div className={styles.xpProgress}></div>
                </div>
            </div>
        </div>
    );
};

export default HudPanel;
