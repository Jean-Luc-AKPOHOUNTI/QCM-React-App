import '../index.css'
import QuestionData from './QuestionData.jsx'
import Star from './Star.jsx'

// Composant récapitulatif avec affichage du texte des réponses
export default function QuestionRecap({ answers, questions }) {
  // Calcule le score en comparant les réponses de l'utilisateur avec les réponses correctes
  // Utilise reduce pour accumuler le score en vérifiant si la réponse de l'utilisateur est correcte
  // answers est un tableau des réponses de l'utilisateur et questions est un tableau des questions
  const score = answers.reduce((acc, ans, idx) => acc + (ans === questions[idx].answer ? 1 : 0), 0);

  // Calcule le ratio (pourcentage) de bonnes réponses
  const ratio = score / questions.length;

  // Calcule le nombre d'étoiles (1 à 3)
  let starsCount = 1;
  if (ratio >= 0.8) starsCount = 3;
  else if (ratio >= 0.5) starsCount = 2;

  // Fonction utilitaire pour retrouver le texte d'un choix
  function getChoiceText(question, label) {
    const found = question.choices.find(c => c.label === label);
    return found ? found.text : label;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-2xl w-full space-y-10">
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center flex items-center justify-center space-x-4">
          <p className='bg-indigo-500 w-full p-4 rounded-md shadow-lg shadow-slate-600'>Résumé du Quiz</p>
        </div>

        {/* Carte score */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border-l-4 border-indigo-500">
          {/* Affichage des étoiles selon le score */}
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(starsCount)].map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Votre score
          </p>
          <p className="mt-2 text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {score} / {questions.length}
          </p>
        </div>

        {/* Liste des questions */}
        <div className="space-y-6">
          {questions.map((q, idx) => {
            const isCorrect = answers[idx] === q.answer;
            return (
              <div
                key={idx}
                className={`
                  bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4
                  p-6 transition transform hover:-translate-y-1
                  ${isCorrect
                    ? 'border-green-500'
                    : 'border-red-500'}
                `}
              >
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {q.question}
                </p>
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div className="flex items-center space-x-2">
                    <i className="text-gray-700 dark:text-gray-300">Votre réponse :</i>
                    <i className={`
                      px-3 py-1 rounded-full font-semibold
                      ${isCorrect
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}
                    `}>
                      {getChoiceText(q, answers[idx])}
                    </i>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="text-gray-700 dark:text-gray-300">Bonne réponse :</i>
                    <i className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 font-semibold">
                      {getChoiceText(q, q.answer)}
                    </i>
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2 font-semibold">
                  {isCorrect ? (
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="12" fill="#10b981" />
                      <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="12" fill="#ef4444" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  <i className={isCorrect ? 'text-green-600 dark:text-green-300' : 'text-red-600 dark:text-red-300'}>
                    {isCorrect ? 'Bonne réponse' : 'Mauvaise réponse'}
                  </i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}