import './index.css'
import QuestionCard from './Quiz/QuestionCard'
import StartGame from './Quiz/StartGame'
import CategorySelect from './Quiz/CategorySelect'
import QuestionData from './Quiz/QuestionData'
import { useState } from 'react'

function App() {
  const [started, setStarted] = useState(false)
  const [category, setCategory] = useState(null)

  const categories = [...new Set(QuestionData.map(q => q.category))]

  const filteredQuestions = category
    ? QuestionData.filter(q => q.category === category)
    : []

  return (
    <>
      {!started ? (
        <StartGame onStart={() => setStarted(true)} />
      ) : !category ? (
        <CategorySelect categories={categories} onSelect={setCategory} />
      ) : (
        <QuestionCard questions={filteredQuestions} onBack={() => setCategory(null)} />
      )}
    </>
  )
}

export default App
