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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            🍸 Cocktail Quiz Master
          </h1>
          <p className="text-slate-300 mt-2">Test your knowledge of classic and modern cocktail recipes</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Question Setup */}
        {showNumber && (
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 mb-8 shadow-2xl">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                How many questions would you like to answer?
              </h2>
              <div className="flex items-center justify-center gap-4">
                <input 
                  type="number" 
                  min="1"
                  max="83"
                  onChange={e=>setNumberOfQuestions(Number(e.target.value))}
                  className="w-24 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="1-83"
                />
                <button 
                  onClick={()=>setShowNumber(false)}
                  className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Refresh Button */}
        {numberOfQuestions > 0 && (
          <div className="text-center mb-8">
            <button 
              onClick={refreshQuestions}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium rounded-xl transition-all duration-200 border border-slate-600 hover:border-slate-500"
            >
              🔄 New Questions
            </button>
          </div>
        )}

        {/* Questions Grid */}
        {numberOfQuestions > 0 && (
          <div className="grid gap-8">
            {Array.from({length: numberOfQuestions}).map((_,index):ReactNode=>{
              return (
                <div 
                  key={index} 
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <QuestionCard id={index}></QuestionCard>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
