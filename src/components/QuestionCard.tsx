import { useState, type ChangeEvent, type ReactNode } from "react";
import { cocktails } from "../resources/recipes"

interface QuestionCardProps {
    id: number;
    onComplete: (score: number, maxScore: number) => void;
}

export const QuestionCard = ({id, onComplete}: QuestionCardProps)=>{
    const numberOfInputs = cocktails[id].numberOfIngredients
    const nameOfCocktail = cocktails[id].name
    const correctAnswers = cocktails[id].ingredients

    const [numberCorrect, setNumberCorrect] = useState(false)
    const [points, setPoints] = useState(0)
    const [answers, setAnswers] = useState(Array.from({length: numberOfInputs}, ()=>({
            item: "", measurement: ""
        }))
    )
    const [submitted, setSubmitted] = useState(false)
    const [hasNotifiedCompletion, setHasNotifiedCompletion] = useState(false)
    const [ingredientCountSubmitted, setIngredientCountSubmitted] = useState(false)
    const [ingredientCountValue, setIngredientCountValue] = useState("")
    const [countSubmissionAttempted, setCountSubmissionAttempted] = useState(false)
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(false)
    const [answerScores, setAnswerScores] = useState<Array<{ingredient: number, measurement: number}>>([])

    const handleIngredientCountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIngredientCountValue(event.target.value)
    }

    const submitIngredientCount = () => {
        setCountSubmissionAttempted(true)
        const value = Number(ingredientCountValue)
        if (value === numberOfInputs) {
            setNumberCorrect(true)
            setIngredientCountSubmitted(true)
        } else {
            setNumberCorrect(false)
            setIngredientCountSubmitted(false)
            // Notify parent that this question is blocked (0 score, but still counts toward max score)
            const maxScoreForThisQuestion = numberOfInputs * 2 // Each ingredient has 2 parts: name and measurement
            onComplete(0, maxScoreForThisQuestion) // 0 score, but full max possible score for blocked questions
        }
    }

    const changeAnswers = (index: number, field: "item"|"measurement", value: string)=>{
        setAnswers(prev => {
            let newAnswers = [...prev];
            newAnswers[index] = { ...newAnswers[index], [field]: value };
            return newAnswers;
        });
    }

    function levenshteinComparison(a: string, b: string): number {
        const dp = Array.from({length: a.length + 1}, () => Array(b.length + 1).fill(0));

        for (let i = 0; i <= a.length; i++) dp[i][0] = i;
        for (let j = 0; j <= b.length; j++) dp[0][j] = j;

        for (let i = 1; i <= a.length; i++) {
            for (let j = 1; j <= b.length; j++) {
                if (a[i-1] === b[j-1]) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1;
                }
            }
        }

        return dp[a.length][b.length];
    }

    const compareAnswer = (originalAnswer: string, answerGiven: string)=>{
        let distance = 0
        distance = levenshteinComparison(answerGiven, originalAnswer)
        const matchPercentage = (originalAnswer.length - distance)/originalAnswer.length
        if('0' <= originalAnswer[0] && originalAnswer[0] <= '9' && matchPercentage < 1){ //Ignore matchPercentage if we are comparing numbers (measurements)
            return 0
        }
        else if(matchPercentage >= 0.9){
            return 1
        }else if(matchPercentage >= 0.70){
            return 0.75
        }else if(matchPercentage >= 0.5){
            return 0.5
        }else{
            return 0
        }
    }

    const submitQuestion = ()=>{
        if(submitted == true){
            return
        }
        setSubmitted(true)
        const answersGiven = answers
        let pointsScored = 0;
        const individualScores: Array<{ingredient: number, measurement: number}> = [];
        
        for(let i=0; i<numberOfInputs; i++){
            let mostValid = ""
            let ingredientIndex = -1
            let distance = 10000
            answersGiven[i].item = answersGiven[i].item.toLowerCase().replace(/[^a-z|0-9]/g,"")
            answersGiven[i].measurement = answersGiven[i].measurement.toLowerCase().replace(/[^a-z0-9]/g,"")
            for(let j=0; j<correctAnswers.length; j++){
                correctAnswers[j].item = correctAnswers[j].item.toLowerCase().replace(/[^a-z|0-9|]/g,"")
                let validItemAnswers = correctAnswers[j].item.split('|')
                correctAnswers[j].measure = correctAnswers[j].measure.toLowerCase().replace(/[^a-z0-9]/g,"")
                for(let k=0; k<validItemAnswers.length; k++){
                    const currentDistance = levenshteinComparison(answersGiven[i].item, validItemAnswers[k])
                    if(currentDistance < distance){
                        ingredientIndex = j
                        distance = currentDistance
                        mostValid = validItemAnswers[k]
                    }
                }
            }
            
            const ingredientScore = compareAnswer(mostValid, answersGiven[i].item)
            const measurementScore = compareAnswer(correctAnswers[ingredientIndex].measure, answersGiven[i].measurement)
            
            pointsScored += ingredientScore + measurementScore
            individualScores.push({ingredient: ingredientScore, measurement: measurementScore})
        }
        
        setAnswerScores(individualScores)
        setPoints(pointsScored)
        setShowCorrectAnswers(true) // Show correct answers after submission
        
        // Notify parent component about completion
        if (!hasNotifiedCompletion) {
            const maxScore = numberOfInputs * 2; // Each ingredient has 2 parts: name and measurement
            onComplete(pointsScored, maxScore);
            setHasNotifiedCompletion(true);
        }
    }


    return <div className={`bg-black/40 backdrop-blur-xl rounded-2xl border p-6 shadow-2xl transition-all duration-500 ${
        countSubmissionAttempted && !numberCorrect 
            ? "border-red-500/30 bg-red-900/10" 
            : "border-gray-800/50 hover:shadow-amber-500/10 hover:border-gray-700/50"
    }`}>
        {/* Cocktail Name Header */}
        <div className="text-center mb-6">
            <h3 className="text-3xl font-display text-white mb-2 drop-shadow-lg">{nameOfCocktail}</h3>
            {countSubmissionAttempted && !numberCorrect && (
                <div className="text-red-400 text-sm font-body font-semibold mb-2 bg-red-900/20 px-3 py-1 rounded-lg border border-red-500/30">
                    ❌ Question Blocked - Incorrect ingredient count
                </div>
            )}
            <div className={`w-16 h-1 mx-auto rounded-full shadow-lg ${
                countSubmissionAttempted && !numberCorrect 
                    ? "bg-gradient-to-r from-red-400 to-red-500" 
                    : "bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500"
            }`}></div>
        </div>

        {/* Ingredient Count Question */}
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 mb-4 border border-gray-800/50">
            <label className="block text-gray-200 text-lg font-body font-semibold mb-4">
                How many ingredients does <span className="text-amber-400 font-display">{nameOfCocktail}</span> have?
            </label>
            <div className="flex items-center gap-4">
                <input 
                    onChange={handleIngredientCountChange}
                    value={ingredientCountValue}
                    disabled={ingredientCountSubmitted}
                    className={`w-16 px-3 py-2 rounded-xl text-center text-lg font-mono font-bold focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                        countSubmissionAttempted 
                            ? (numberCorrect 
                                ? "bg-green-600/20 border-2 border-green-500 text-green-400 shadow-lg" 
                                : "bg-red-600/20 border-2 border-red-500 text-red-400 shadow-lg")
                            : "bg-gray-800/80 border border-gray-700 text-white focus:ring-amber-400 hover:bg-gray-700/80"
                    } disabled:opacity-75 disabled:cursor-not-allowed`}
                    type="number" 
                    min="1"
                    max="20"
                    placeholder="?"
                />
                <span className="text-gray-400 text-sm font-body font-medium">ingredients</span>
                {!ingredientCountSubmitted && (
                    <button 
                        onClick={submitIngredientCount}
                        disabled={!ingredientCountValue || Number(ingredientCountValue) < 1}
                        className="px-4 py-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 hover:from-amber-500 hover:via-orange-600 hover:to-amber-700 disabled:from-gray-700 disabled:to-gray-800 text-black font-display rounded-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-amber-500/30 text-sm"
                    >
                        Submit
                    </button>
                )}
            </div>
            
            {/* Feedback Messages */}
            {countSubmissionAttempted && (
                <div className={`mt-3 p-3 rounded-xl border shadow-lg ${
                    numberCorrect 
                        ? "bg-green-500/10 border-green-500/30" 
                        : "bg-red-500/10 border-red-500/30"
                }`}>
                    <div className={`flex items-center gap-2 font-body font-semibold text-sm ${
                        numberCorrect ? "text-green-400" : "text-red-400"
                    }`}>
                        <span className="text-lg">
                            {numberCorrect ? "✓" : "✗"}
                        </span>
                        <span>
                            {numberCorrect 
                                ? `Correct! ${nameOfCocktail} has ${numberOfInputs} ingredients.` 
                                : `Incorrect. ${nameOfCocktail} has ${numberOfInputs} ingredients. You cannot proceed with this question.`}
                        </span>
                    </div>
                </div>
            )}
        </div>

        {/* Ingredient Inputs */}
        {numberCorrect && ingredientCountSubmitted && (
            <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2 text-green-400 font-body font-semibold text-sm">
                        <span className="text-lg">✓</span>
                        <span>Correct! Now list the ingredients and measurements:</span>
                    </div>
                </div>

                <div className="grid gap-3">
                    {Array.from({length: numberOfInputs}).map((_,index):ReactNode=>{
                        return (
                            <div key={index} className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50 shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-6 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-full flex items-center justify-center text-black font-black text-sm shadow-lg">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-300 font-body font-semibold text-sm">Ingredient #{index + 1}</span>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-gray-400 text-sm font-body font-semibold mb-2">
                                            Ingredient Name
                                        </label>
                                        <input 
                                            disabled={submitted} 
                                            onChange={e => changeAnswers(index, "item", e.target.value)} 
                                            type="text" 
                                            className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/80 text-sm font-body"
                                            placeholder="e.g., Gin, Vodka, Lime Juice..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm font-body font-semibold mb-2">
                                            Measurement
                                        </label>
                                        <input 
                                            disabled={submitted} 
                                            onChange={e => changeAnswers(index, "measurement", e.target.value)} 
                                            type="text" 
                                            className="w-full px-3 py-2 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/80 text-sm font-body"
                                            placeholder="e.g., 40ml, Fill, 2 dashes..."
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Submit Button */}
                <div className="text-center pt-3">
                    <button 
                        onClick={submitQuestion}
                        disabled={submitted}
                        className="px-6 py-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 hover:from-amber-500 hover:via-orange-600 hover:to-amber-700 disabled:from-gray-700 disabled:to-gray-800 text-black font-display rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/30 disabled:transform-none disabled:cursor-not-allowed text-sm"
                    >
                        {submitted ? (
                            <span className="flex items-center gap-2">
                                <span className="text-lg">✓</span>
                                <span>Submitted! Score: {points.toFixed(1)}/{numberOfInputs * 2}</span>
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <span className="text-lg">🍸</span>
                                <span>Submit Answer</span>
                            </span>
                        )}
                    </button>
                </div>

                {/* Correct Answers Display */}
                {showCorrectAnswers && (
                    <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">📚</span>
                            <h4 className="text-lg font-display text-blue-400">Correct Answers</h4>
                        </div>
                        <div className="grid gap-3">
                            {answers.map((userAnswer, index) => {
                                // Find which correct ingredient this user answer matched
                                let matchedIngredient = null
                                let matchedIndex = -1
                                
                                if (userAnswer.item) {
                                    let bestDistance = 10000
                                    const cleanUserItem = userAnswer.item.toLowerCase().replace(/[^a-z|0-9]/g,"")
                                    
                                    for(let j=0; j<correctAnswers.length; j++){
                                        const cleanCorrectItem = correctAnswers[j].item.toLowerCase().replace(/[^a-z|0-9|]/g,"")
                                        const validItemAnswers = cleanCorrectItem.split('|')
                                        
                                        for(let k=0; k<validItemAnswers.length; k++){
                                            const currentDistance = levenshteinComparison(cleanUserItem, validItemAnswers[k])
                                            if(currentDistance < bestDistance){
                                                bestDistance = currentDistance
                                                matchedIngredient = correctAnswers[j]
                                                matchedIndex = j
                                            }
                                        }
                                    }
                                }
                                
                                return (
                                    <div key={index} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-black font-black text-sm">
                                                {index + 1}
                                            </div>
                                            <span className="text-gray-300 font-body font-semibold text-sm">Your Answer #{index + 1}</span>
                                        </div>
                                        
                                        {/* Show what the user answered */}
                                        <div className="grid md:grid-cols-2 gap-3 mb-4">
                                            <div>
                                                <div className="flex items-center justify-between mb-1">
                                                    <label className="block text-gray-400 text-xs font-semibold">
                                                        Your Ingredient
                                                    </label>
                                                    <span className="text-xs font-mono text-amber-400">
                                                        {answerScores[index]?.ingredient?.toFixed(1) || "0.0"} pts
                                                    </span>
                                                </div>
                                                <div className={`px-3 py-2 rounded-lg text-sm font-mono ${
                                                    answerScores[index]?.ingredient > 0
                                                        ? "bg-green-600/20 border border-green-500/30 text-green-400" 
                                                        : "bg-red-600/20 border border-red-500/30 text-red-400"
                                                }`}>
                                                    {userAnswer.item || "Not answered"}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between mb-1">
                                                    <label className="block text-gray-400 text-xs font-semibold">
                                                        Your Measurement
                                                    </label>
                                                    <span className="text-xs font-mono text-amber-400">
                                                        {answerScores[index]?.measurement?.toFixed(1) || "0.0"} pts
                                                    </span>
                                                </div>
                                                <div className={`px-3 py-2 rounded-lg text-sm font-mono ${
                                                    answerScores[index]?.measurement > 0
                                                        ? "bg-green-600/20 border border-green-500/30 text-green-400" 
                                                        : "bg-red-600/20 border border-red-500/30 text-red-400"
                                                }`}>
                                                    {userAnswer.measurement || "Not answered"}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Show what it matched against */}
                                        {matchedIngredient && (
                                            <div className="pt-3 border-t border-gray-700">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="text-lg">🎯</span>
                                                    <span className="text-sm font-body text-gray-300">Matched against:</span>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="block text-gray-400 text-xs font-semibold mb-1">
                                                            Correct Ingredient
                                                        </label>
                                                        <div className="px-3 py-2 bg-green-600/20 border border-green-500/30 rounded-lg text-green-400 text-sm font-mono">
                                                            {matchedIngredient.item}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-400 text-xs font-semibold mb-1">
                                                            Correct Measurement
                                                        </label>
                                                        <div className="px-3 py-2 bg-green-600/20 border border-green-500/30 rounded-lg text-green-400 text-sm font-mono">
                                                            {matchedIngredient.measure}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Total points for this answer */}
                                        <div className="mt-3 pt-2 border-t border-gray-600">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-body text-gray-300">Total for this answer:</span>
                                                <span className="text-sm font-mono font-bold text-amber-400">
                                                    {((answerScores[index]?.ingredient || 0) + (answerScores[index]?.measurement || 0)).toFixed(1)} / 2.0 pts
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        )}
    </div>
}