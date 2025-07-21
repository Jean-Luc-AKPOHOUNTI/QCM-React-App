import '../index.css'

export default function QuestionRecap({ question }) {
    // J'affiche ici les resultats du quiz bien justifié
    return (
        <div className="bg-slate-200 min-h-screen flex items-center justify-center">
            <div className="rounded-3xl shadow-xl bg-gradient-to-b from-blue-700 to-indigo-900 w-80 p-6">
                <div className="text-white text-lg font-semibold text-center mb-4">
                    {question}
                </div>
                <div className="text-white text-sm">
                    {/* Ici, vous pouvez afficher les résultats du quiz */}
                    Vos réponses et résultats seront affichés ici.
                </div>
            </div>
        </div>
    )
}