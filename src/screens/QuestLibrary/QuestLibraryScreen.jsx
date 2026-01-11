import { useState, useMemo } from 'react';
import styles from './QuestLibraryScreen.module.css';
import VerticalNav from '../../components/VerticalNav/VerticalNav';
import useLocalStorage from '../../hooks/useLocalStorage';
import QuestSection from '../../components/QuestSection/QuestSection';
import QuestLibraryCard from '../../components/QuestLibraryCard/QuestLibraryCard';
import QuestFormModal from '../../components/modals/QuestFormModal/QuestFormModal';
import QuestDetailCard from '../../components/QuestDetailCard/QuestDetailCard';

// Mock data for initial setup
const mockQuests = [
    { id: 1, title: 'Morning Run', description: 'Run 5km.', howToDo: 'Just run.', category: 'Core', xp: 50, stats: ['DEX', 'CON'], isActive: true },
    { id: 2, title: 'Read a Book', description: 'Read one chapter of a book.', howToDo: 'Open book, read.', category: 'Optional', xp: 20, stats: ['WIS', 'INT'], isActive: false },
    { id: 3, title: 'Weekly Shadow Sparring', description: 'Practice combat forms.', howToDo: 'Find a quiet place and train.', category: 'Special', xp: 100, stats: ['STR', 'DEX'], isActive: false },
];

const QuestLibraryScreen = ({ onNavigateToHome }) => {
    const [quests, setQuests] = useLocalStorage('quests', mockQuests);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [questToEdit, setQuestToEdit] = useState(null);
    const [selectedQuest, setSelectedQuest] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('Recently Added');

    const filteredAndSortedQuests = useMemo(() => {
        let filtered = quests.filter(q =>
            q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        switch (sortOrder) {
            case 'XP':
                filtered.sort((a, b) => b.xp - a.xp);
                break;
            case 'Recently Added':
            default:
                filtered.sort((a, b) => b.id - a.id);
                break;
        }

        return filtered;
    }, [quests, searchTerm, sortOrder]);

    const handleOpenModal = () => {
        setQuestToEdit(null);
        setIsModalOpen(true);
    };

    const handleEditQuest = (quest) => {
        setQuestToEdit(quest);
        setIsModalOpen(true);
    };

    const handleDeleteQuest = (questToDelete) => {
        setQuests(quests.filter(q => q.id !== questToDelete.id));
    };

    const handleSaveQuest = (questData) => {
        if (questData.id) {
            // Editing existing quest
            setQuests(quests.map(q => q.id === questData.id ? questData : q));
        } else {
            // Adding new quest
            setQuests([...quests, { ...questData, id: Date.now(), isActive: false }]);
        }
    };

    const handleSelectQuest = (quest) => {
        setSelectedQuest(quest);
    };

    const handleCloseDetail = () => {
        setSelectedQuest(null);
    };

    return (
        <>
            <QuestDetailCard quest={selectedQuest} onClose={handleCloseDetail} />
            <QuestFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveQuest}
                questToEdit={questToEdit}
            />
            <div className={styles.questLibraryScreen}>
                <div className={styles.nav}>
                    <VerticalNav onNavigateToHome={onNavigateToHome} activeScreen="questLibrary" />
                </div>
                <main className={styles.mainContent}>
                    <header className={styles.header}>
                        <h1>Quest Library</h1>
                    </header>
                    <div className={styles.controls}>
                        <button className={styles.addQuestButton} onClick={handleOpenModal}>+ Add Quest</button>
                        <input
                            type="text"
                            placeholder="Search quests..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <select
                            className={styles.sortDropdown}
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option>Recently Added</option>
                            <option>XP</option>
                        </select>
                    </div>
                    <div className={styles.questSections}>
                        <QuestSection title="🛡️ Core Quests">
                            {filteredAndSortedQuests.filter(q => q.category === 'Core').length > 0 ? (
                            filteredAndSortedQuests.filter(q => q.category === 'Core').map(quest => (
                                <QuestLibraryCard
                                    key={quest.id}
                                    quest={quest}
                                    onEdit={handleEditQuest}
                                    onDelete={handleDeleteQuest}
                                    onSelect={handleSelectQuest}
                                />
                            ))
                        ) : (
                            <p>No core quests defined.</p>
                        )}
                    </QuestSection>
                    <QuestSection title="📘 Optional Quests">
                        {filteredAndSortedQuests.filter(q => q.category === 'Optional').length > 0 ? (
                            filteredAndSortedQuests.filter(q => q.category === 'Optional').map(quest => (
                                <QuestLibraryCard
                                    key={quest.id}
                                    quest={quest}
                                    onEdit={handleEditQuest}
                                    onDelete={handleDeleteQuest}
                                    onSelect={handleSelectQuest}
                                />
                            ))
                        ) : (
                            <p>No optional quests defined.</p>
                        )}
                    </QuestSection>
                    <QuestSection title="🔥 Special Quests">
                        {filteredAndSortedQuests.filter(q => q.category === 'Special').length > 0 ? (
                            filteredAndSortedQuests.filter(q => q.category === 'Special').map(quest => (
                                <QuestLibraryCard
                                    key={quest.id}
                                    quest={quest}
                                    onEdit={handleEditQuest}
                                    onDelete={handleDeleteQuest}
                                    onSelect={handleSelectQuest}
                                />
                            ))
                        ) : (
                            <p>No special quests defined.</p>
                        )}
                    </QuestSection>
                </div>
            </main>
        </div>
        </>
    );
};

export default QuestLibraryScreen;
