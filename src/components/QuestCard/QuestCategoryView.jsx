import styles from './QuestCategoryView.module.css';

const QuestCategoryView = ({ onSelectCategory }) => {
    return (
        <div className={styles.categoryView}>
            <h3 className={styles.title}>Select a Category</h3>
            <div className={styles.categoryList}>
                <button onClick={() => onSelectCategory('CORE')}>CORE QUEST</button>
                <button onClick={() => onSelectCategory('OPTIONAL')}>OPTIONAL QUEST</button>
                <button onClick={() => onSelectCategory('SPECIAL')}>SPECIAL QUEST</button>
            </div>
        </div>
    );
};

export default QuestCategoryView;
