import '../index.css'
import QuestionData from './QuestionData.jsx'

export default function QuestionTitle({ question }) {
    return (
        <div className="rounded-t-3xl p-6 pb-4 text-center text-white bg-gradient-to-b from-blue-700 to-indigo-900">
            <div className="mt-2 font-semibold text-lg">
                {question}
            </div>
        </div>
    )
}