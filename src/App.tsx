import { useState, type ReactNode } from 'react'
import './App.css'
import { QuestionCard } from './components/QuestionCard'

function App() {

  let questionNumbers: Set<number> = new Set<number>()
  const [numberOfQuestions, setNumberOfQuestions] = useState(0)
  const [showNumber, setShowNumber] = useState(true)

  const refreshQuestions = ()=>{
    setShowNumber(true)
    questionNumbers.clear()
    while(questionNumbers.size != numberOfQuestions){
      questionNumbers.add(Math.floor(Math.random()*67))
    }
  }

  return (
    <div>
      {showNumber && <div>
        How many questions do u want to answer at once? <input type="number" onChange={e=>setNumberOfQuestions(Number(e.target.value))}/>
        <button onClick={()=>setShowNumber(false)}>LOCK</button>
      </div>
      }
      <button onClick={refreshQuestions}>Refresh</button>
      {
        <div>
          {Array.from({length: numberOfQuestions}).map((_,index):ReactNode=>{
            return <QuestionCard id={index}></QuestionCard>
          })}
        </div>
      }
    </div>
  )
}

export default App
