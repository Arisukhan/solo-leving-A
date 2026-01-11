import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './QuestFormModal.module.css';

const QuestFormModal = ({ isOpen, onClose, onSave, questToEdit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        howToDo: '',
        category: 'Optional',
        xp: '',
        stats: [],
    });

    useEffect(() => {
        if (questToEdit) {
            setFormData(questToEdit);
        } else {
            setFormData({
                title: '',
                description: '',
                howToDo: '',
                category: 'Optional',
                xp: '',
                stats: [],
            });
        }
    }, [questToEdit, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleStatToggle = (stat) => {
        setFormData(prev => ({
            ...prev,
            stats: prev.stats.includes(stat)
                ? prev.stats.filter(s => s !== stat)
                : [...prev.stats, stat]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    const statOptions = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.backdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <header className={styles.header}>
                            <h2>{questToEdit ? 'Edit Quest' : 'Add New Quest'}</h2>
                            <button className={styles.closeButton} onClick={onClose}><X /></button>
                        </header>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Quest Title"
                                required
                            />
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Description"
                                required
                            />
                            <textarea
                                name="howToDo"
                                value={formData.howToDo}
                                onChange={handleChange}
                                placeholder="How to do"
                            />
                            <select name="category" value={formData.category} onChange={handleChange}>
                                <option value="Core">Core</option>
                                <option value="Optional">Optional</option>
                                <option value="Special">Special</option>
                            </select>
                            <input
                                type="number"
                                name="xp"
                                value={formData.xp}
                                onChange={handleChange}
                                placeholder="XP"
                                required
                            />
                            <div className={styles.statsContainer}>
                                {statOptions.map(stat => (
                                    <button
                                        type="button"
                                        key={stat}
                                        className={`${styles.statButton} ${formData.stats.includes(stat) ? styles.selected : ''}`}
                                        onClick={() => handleStatToggle(stat)}
                                    >
                                        {stat}
                                    </button>
                                ))}
                            </div>
                            <div className={styles.formActions}>
                                <button type="button" className={styles.cancelButton} onClick={onClose}>Cancel</button>
                                <button type="submit" className={styles.saveButton}>Save</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default QuestFormModal;
