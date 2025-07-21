import '../index.css'
import QuestionTitle from './QuestionTitle.jsx'
import QuestionChoice from './QuestionChoice.jsx'
import NextButton from './NextButton.jsx'
import QuestionData from './QuestionData.jsx'

export default function QuestionCard() {
    const currentQuestion = QuestionData[0]; 
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="rounded-3xl shadow-xl bg-gradient-to-b from-blue-700 to-indigo-900 w-80 p-0">
                <QuestionTitle question={currentQuestion.question}/>
                <div className="bg-gray-900 rounded-b-3xl p-6 pt-4">
                    <QuestionChoice choices={currentQuestion.choices} />
                    <NextButton />
                </div>
            </div>
        </div>
    )
}