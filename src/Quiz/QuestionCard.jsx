import '../index.css' // Importe le fichier CSS global
import QuestionTitle from './QuestionTitle.jsx' // Importe le composant pour afficher le titre de la question
import QuestionChoice from './QuestionChoice.jsx' // Importe le composant pour afficher les choix de réponse
import NextButton from './NextButton.jsx' // Importe le bouton "Suivant"
import QuestionData from './QuestionData.jsx' // Importe les données des questions
import QuestionRecap from './QuestionRecap.jsx' // Importe le composant de récapitulatif
import { useState } from 'react' // Importe le hook useState de React

export default function QuestionCard() { // Déclare le composant principal QuestionCard
    const [currentIndex, setCurrentIndex] = useState(0) // État pour l'index de la question courante
    const [answers, setAnswers] = useState([]) // État pour stocker les réponses de l'utilisateur
    const [selected, setSelected] = useState(null) // État pour la réponse sélectionnée
    const [showRecap, setShowRecap] = useState(false) // État pour afficher le récapitulatif

    const currentQuestion = QuestionData[currentIndex] // Récupère la question courante à partir des données

    function handleChoice(label) { // Fonction appelée lors de la sélection d'un choix
        setSelected(label) // Met à jour la réponse sélectionnée
    }

    function handleNext() { // Fonction appelée lors du clic sur "Suivant"
        if (selected == null) return // Si aucune réponse n'est sélectionnée, ne fait rien
        setAnswers([...answers, selected]) // Ajoute la réponse sélectionnée au tableau des réponses
        setSelected(null) // Réinitialise la sélection
        if (currentIndex < QuestionData.length - 1) { // Si ce n'est pas la dernière question
            setCurrentIndex(currentIndex + 1) // Passe à la question suivante
        } else {
            setShowRecap(true) // Sinon, affiche le récapitulatif
        }
    }

    if (showRecap) {
        return <QuestionRecap answers={answers} questions={QuestionData} /> // Passe les réponses et les questions
    }

    return (
        <div className="bg-slate-200 min-h-screen flex items-center justify-center px-2"> {/* Conteneur principal centré */}
            <div className="rounded-3xl shadow-xl bg-gradient-to-b from-blue-700 to-indigo-900 p-0"> {/* Carte stylisée */}
                <QuestionTitle question={currentQuestion.question}/> {/* Affiche le titre de la question */}
                <div className="bg-gray-900 rounded-b-3xl p-6 pt-4"> {/* Section des choix et du bouton */}
                    <QuestionChoice
                        choices={currentQuestion.choices} // Passe les choix de la question courante
                        selected={selected} // Passe la réponse sélectionnée
                        onSelect={handleChoice} // Passe la fonction de sélection
                    />
                    <NextButton onClick={handleNext} /> {/* Bouton pour passer à la question suivante */}
                </div>
            </div>
        </div>
    )
}