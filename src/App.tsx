import { useState, type ReactNode } from 'react'
import './App.css'
import { QuestionCard } from './components/QuestionCard'

function App() {

  const [questionNumbers, setQuestionNumbers] = useState<Set<number>>(new Set())
  const [numberOfQuestions, setNumberOfQuestions] = useState(0)
  const [showNumber, setShowNumber] = useState(true)
  const [completedQuestions, setCompletedQuestions] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [maxPossibleScore, setMaxPossibleScore] = useState(0)
  const [showFinalScore, setShowFinalScore] = useState(false)
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false)
  const [blockedQuestions, setBlockedQuestions] = useState(0)

  const generateRandomQuestions = (count: number) => {
    const newQuestionNumbers = new Set<number>()
    const maxQuestions = 67 // Total number of cocktails available
    
    // Ensure we don't ask for more questions than available
    const actualCount = Math.min(count, maxQuestions)
    
    while (newQuestionNumbers.size < actualCount) {
      const randomId = Math.floor(Math.random() * maxQuestions)
      newQuestionNumbers.add(randomId)
    }
    
    console.log('Generated questions:', Array.from(newQuestionNumbers))
    return newQuestionNumbers
  }

  const refreshQuestions = () => {
    setShowNumber(true)
    // Reset score tracking
    setCompletedQuestions(0)
    setTotalScore(0)
    setMaxPossibleScore(0)
    setShowFinalScore(false)
    setBlockedQuestions(0)
    // Generate new random questions
    if (numberOfQuestions > 0) {
      setIsGeneratingQuestions(true)
      setTimeout(() => {
        setQuestionNumbers(generateRandomQuestions(numberOfQuestions))
        setIsGeneratingQuestions(false)
      }, 100) // Small delay to show loading state
    }
  }

  const handleQuestionComplete = (score: number, maxScore: number) => {
    // Always add to max possible score (whether completed or blocked)
    setMaxPossibleScore(prevMax => prevMax + maxScore)
    
    // If score is 0, this is a blocked question
    if (score === 0) {
      setBlockedQuestions(prev => {
        const newBlockedCount = prev + 1
        // Check if all questions are processed (completed + blocked = total)
        if (completedQuestions + newBlockedCount === numberOfQuestions) {
          setTimeout(() => setShowFinalScore(true), 500)
        }
        return newBlockedCount
      })
    } else {
      // This is a completed question (not blocked)
      setCompletedQuestions(prev => {
        const newCount = prev + 1
        setTotalScore(prevScore => prevScore + score)
        
        // Check if all questions are completed
        if (newCount + blockedQuestions === numberOfQuestions) {
          setTimeout(() => setShowFinalScore(true), 500) // Small delay for better UX
        }
        
        return newCount
      })
    }
  }

  const handleStartQuiz = () => {
    if(numberOfQuestions === 0){
      alert("Enter a number to continue")
      return
    }
    setShowNumber(false)
    setCompletedQuestions(0)
    setTotalScore(0)
    setMaxPossibleScore(0)
    setShowFinalScore(false)
    setBlockedQuestions(0)
    // Generate random questions when starting quiz
    setIsGeneratingQuestions(true)
    setTimeout(() => {
      setQuestionNumbers(generateRandomQuestions(numberOfQuestions))
      setIsGeneratingQuestions(false)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur-md border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-4xl font-display bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
            🍸 Cocktail Quiz Master
          </h1>
          <p className="text-gray-400 mt-2 text-lg font-body font-light">Test your knowledge of classic and modern cocktail recipes</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Question Setup */}
        {showNumber && (
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-6 mb-6 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
            <div className="text-center">
              <h2 className="text-2xl font-display text-gray-100 mb-4">
                How many questions would you like to answer?
              </h2>
              <div className="flex items-center justify-center gap-4">
                <input 
                  type="number" 
                  min="1"
                  max="68"
                  onChange={e=>setNumberOfQuestions(Number(e.target.value))}
                  className="w-20 px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-xl text-white text-center text-lg font-mono font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-800/80"
                  placeholder="1-83"
                />
                <button 
                  onClick={handleStartQuiz}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 hover:from-amber-500 hover:via-orange-600 hover:to-amber-700 text-black font-display rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/30 text-lg"
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Progress and Controls */}
        {numberOfQuestions > 0 && (
          <div className="text-center mb-6">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2 font-body font-medium">
                <span>Progress</span>
                <span>{completedQuestions} / {numberOfQuestions} completed ({blockedQuestions} blocked)</span>
              </div>
              <div className="w-full bg-gray-900/50 rounded-full h-2 border border-gray-800/50 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 h-2 rounded-full transition-all duration-700 ease-out shadow-lg"
                  style={{ width: `${(completedQuestions / numberOfQuestions) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <button 
              onClick={refreshQuestions}
              disabled={isGeneratingQuestions}
              className="px-6 py-3 bg-gray-900/60 hover:bg-gray-800/60 disabled:bg-gray-900/40 disabled:cursor-not-allowed text-gray-200 font-body font-semibold rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 disabled:border-gray-800 hover:shadow-lg hover:shadow-gray-900/50"
            >
              {isGeneratingQuestions ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin text-lg">⏳</span>
                  <span>Generating...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span className="text-lg">🔄</span>
                  <span>New Questions</span>
                </span>
              )}
            </button>
          </div>
        )}

        {/* Final Score Display */}
        {showFinalScore && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-gray-800/50 p-10 max-w-lg w-full shadow-2xl animate-fadeInUp">
              <div className="text-center">
                <div className="text-7xl mb-6 drop-shadow-2xl">🎉</div>
                <h2 className="text-5xl font-display text-white mb-4">Quiz Complete!</h2>
                <p className="text-gray-400 mb-8 text-xl font-body">Here's how you did:</p>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-gray-800/50">
                  <div className="text-6xl font-mono font-black text-amber-400 mb-4 drop-shadow-lg">
                    {totalScore.toFixed(1)} / {maxPossibleScore}
                  </div>
                  <div className="text-2xl text-gray-300 mb-4 font-body font-semibold">
                    {((totalScore / maxPossibleScore) * 100).toFixed(1)}% Accuracy
                  </div>
                  {blockedQuestions > 0 && (
                    <div className="text-lg text-red-400 mb-4 font-body">
                      {blockedQuestions} question{blockedQuestions > 1 ? 's' : ''} blocked due to incorrect ingredient count
                    </div>
                  )}
                  
                  {/* Performance Rating */}
                  <div className="text-2xl font-display">
                    {completedQuestions === 0 ? (
                      <span className="text-red-400 drop-shadow-lg">🚫 No Questions Completed!</span>
                    ) : totalScore / maxPossibleScore >= 0.9 ? (
                      <span className="text-green-400 drop-shadow-lg">🏆 Master Mixologist!</span>
                    ) : totalScore / maxPossibleScore >= 0.7 ? (
                      <span className="text-blue-400 drop-shadow-lg">🥃 Expert Bartender!</span>
                    ) : totalScore / maxPossibleScore >= 0.5 ? (
                      <span className="text-yellow-400 drop-shadow-lg">🍸 Good Knowledge!</span>
                    ) : (
                      <span className="text-orange-400 drop-shadow-lg">📚 Keep Learning!</span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={refreshQuestions}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 hover:from-amber-500 hover:via-orange-600 hover:to-amber-700 text-black font-display rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/30"
                  >
                    Try Again
                  </button>
                  <button 
                    onClick={() => setShowFinalScore(false)}
                    className="flex-1 px-8 py-4 bg-gray-800/60 hover:bg-gray-700/60 text-gray-200 font-body font-semibold rounded-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isGeneratingQuestions && (
          <div className="text-center py-16">
            <div className="text-6xl mb-6 animate-spin drop-shadow-2xl">⏳</div>
            <p className="text-gray-300 text-xl font-body font-light">Generating new questions...</p>
          </div>
        )}

        {/* Questions Grid */}
        {numberOfQuestions > 0 && !showFinalScore && !isGeneratingQuestions && questionNumbers.size > 0 && (
          <div className="grid gap-4">
            {Array.from(questionNumbers).map((questionId, index):ReactNode=>{
              return (
                <div 
                  key={`${questionId}-${index}`} 
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <QuestionCard 
                    id={questionId} 
                    onComplete={handleQuestionComplete}
                  />
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
