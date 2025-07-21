import '../index.css'

export default function QuestionChoice({ choices, selected, onSelect }) {
    return (
        <div className="space-y-4">
            {/* Parcourt le tableau choices et crée un bouton pour chaque élément. */}
            {choices.map((choice) => (
                <button
                    key={choice.label}
                    className={`w-full flex items-center px-4 py-2 rounded-full border border-gray-700 text-white transition focus:outline-none focus:ring-2 focus:ring-white ${
                        selected === choice.label ? 'bg-gray-800' : 'hover:bg-gray-800'
                    }`}
                    // Définit la fonction onClick qui appelle onSelect avec le label du choix.
                    onClick={() => onSelect(choice.label)}
                >
                    <span className="mr-3 bg-gray-700 rounded-full w-7 h-7 flex items-center justify-center font-bold">
                        {choice.label}
                    </span>
                    {choice.text}
                </button>
            ))}
        </div>
    )
}