import '../index.css'
import QuestionData from './QuestionData.jsx'

export default function NextButton({ onClick }) {
    return (
        <button
            className="mt-6 w-full bg-white text-gray-900 font-bold py-2 rounded-full hover:bg-white/80 transition"
            onClick={onClick}
        >
            Suivant
        </button>
    )
}