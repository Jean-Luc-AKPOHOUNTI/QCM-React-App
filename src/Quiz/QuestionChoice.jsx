import '../index.css'
import QuestionData from './QuestionData.jsx'

export default function QuestionChoice({ choices }) {
    return (
        <div className="space-y-4">
            {choices.map((choice) => (
                <button
                    key={choice.label}
                    className="w-full flex items-center px-4 py-2 rounded-full border border-gray-700 text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
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