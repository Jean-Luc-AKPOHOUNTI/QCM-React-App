import '../index.css'
import QuestionTitle from './QuestionTitle.jsx'
import QuestionChoice from './QuestionChoice.jsx'
import NextButton from './NextButton.jsx'
import QuestionData from './QuestionData.jsx'
import QuestionRecap from './QuestionRecap.jsx'
import { useState, useEffect } from 'react';

// Fonction shuffle Fisher–Yates
function shuffleArray(array) {
    const arr = [...array]; // clone pour ne pas muter l'original
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export default function QuestionCard({ questions: initialQuestions, onBack }) {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        setQuestions(shuffleArray(initialQuestions));
    }, [initialQuestions]);

    // État pour l'index de la question courante
    const [currentIndex, setCurrentIndex] = useState(0);
    // État pour stocker les réponses de l'utilisateur
    const [answers, setAnswers] = useState([]);
    // État pour la réponse sélectionnée
    const [selected, setSelected] = useState(null);
    // État pour afficher le récapitulatif à la fin du quiz
    const [showRecap, setShowRecap] = useState(false);

    // Tant que les questions ne sont pas chargées, on affiche un message de chargement
    if (questions.length === 0) {
        return <div className="p-6 text-center text-white">Chargement...</div>;
    }

    // Récupère la question courante selon l'index
    const currentQuestion = questions[currentIndex];

    // Fonction appelée quand l'utilisateur sélectionne une réponse
    function handleChoice(label) {
        setSelected(label);
    }

    // Fonction appelée lors du clic sur "Suivant"
    function handleNext() {
        // Ne fait rien si aucune réponse n'est sélectionnée
        if (selected == null) return;

        // Ajoute la réponse sélectionnée au tableau des réponses
        setAnswers([...answers, selected]);
        // Réinitialise la sélection pour la prochaine question
        setSelected(null);

        // Si ce n'est pas la dernière question, passe à la suivante
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Sinon, affiche le récapitulatif final
            setShowRecap(true);
        }
    }

    // Nouvelle fonction pour rejouer
    function handleReplay() {
        setQuestions(shuffleArray(QuestionData)); // Remélange
        setCurrentIndex(0); // Retour à la première question
        setAnswers([]); // Réinitialise les réponses
        setSelected(null); // Réinitialise la sélection
        setShowRecap(false); // Cache le récap
    }

    // Affiche le récapitulatif avec les réponses et les questions
    if (showRecap) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6 overflow-hidden">
                <QuestionRecap answers={answers} questions={questions} />
                <button
                    onClick={handleReplay}
                    className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    Rejouer
                </button>

                <button
                    onClick={onBack}
                    className="mt-4 px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                    Retour aux catégories
                </button>
            </div>
        );
    }

    // Affichage principal du quiz question par question
    return (
        <div className="bg-slate-50 min-h-screen flex items-center justify-center px-2">
            <div className="rounded-3xl shadow-xl bg-gradient-to-b from-blue-700 to-indigo-900 p-0">
                {/* Affichage du titre de la question */}
                <QuestionTitle question={currentQuestion.question} />
                {/* Section choix + bouton */}
                <div className="bg-gray-900 rounded-b-3xl p-6 pt-4">
                    <QuestionChoice
                        choices={currentQuestion.choices}
                        selected={selected}
                        onSelect={handleChoice}
                    />
                    <NextButton onClick={handleNext} />
                </div>
                
            </div>
        </div>
    );
}
