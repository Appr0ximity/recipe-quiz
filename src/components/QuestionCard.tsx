import { useState, type ChangeEvent, type ReactNode } from "react";
import { cocktails } from "../resources/recipes"

export const QuestionCard = ({id}: {id: number})=>{
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

    const checkNoOfIngredients = (event: ChangeEvent<HTMLInputElement>)=>{
        const value = Number(event.target.value)
        if(value === numberOfInputs){
            setNumberCorrect(true)
        }else{
            setNumberCorrect(false)
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
            pointsScored += compareAnswer(mostValid, answersGiven[i].item)
            pointsScored += compareAnswer(correctAnswers[ingredientIndex].measure, answersGiven[i].measurement)
        }
        setPoints(pointsScored)
    }


    return <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-2xl hover:shadow-slate-700/50 transition-all duration-300">
        {/* Cocktail Name Header */}
        <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">{nameOfCocktail}</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Ingredient Count Question */}
        <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
            <label className="block text-slate-200 text-lg font-medium mb-4">
                How many ingredients does <span className="text-amber-400 font-semibold">{nameOfCocktail}</span> have?
            </label>
            <div className="flex items-center gap-4">
                <input 
                    onChange={checkNoOfIngredients} 
                    className="w-20 px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" 
                    type="number" 
                    min="1"
                    max="20"
                    placeholder="?"
                />
                <span className="text-slate-400">ingredients</span>
            </div>
        </div>

        {/* Ingredient Inputs */}
        {numberCorrect && (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-green-400 font-medium">
                        <span className="text-xl">✓</span>
                        <span>Correct! Now list the ingredients and measurements:</span>
                    </div>
                </div>

                <div className="grid gap-4">
                    {Array.from({length: numberOfInputs}).map((_,index):ReactNode=>{
                        return (
                            <div key={index} className="bg-slate-700/50 rounded-xl p-6 border border-slate-600">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <span className="text-slate-300 font-medium">Ingredient #{index + 1}</span>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-slate-400 text-sm font-medium mb-2">
                                            Ingredient Name
                                        </label>
                                        <input 
                                            disabled={submitted} 
                                            onChange={e => changeAnswers(index, "item", e.target.value)} 
                                            type="text" 
                                            className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="e.g., Gin, Vodka, Lime Juice..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-slate-400 text-sm font-medium mb-2">
                                            Measurement
                                        </label>
                                        <input 
                                            disabled={submitted} 
                                            onChange={e => changeAnswers(index, "measurement", e.target.value)} 
                                            type="text" 
                                            className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                            placeholder="e.g., 40ml, Fill, 2 dashes..."
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <button 
                        onClick={submitQuestion}
                        disabled={submitted}
                        className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 disabled:transform-none disabled:cursor-not-allowed"
                    >
                        {submitted ? (
                            <span className="flex items-center gap-2">
                                <span className="text-xl">✓</span>
                                <span>Submitted! Score: {points.toFixed(1)}/{numberOfInputs * 2}</span>
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <span className="text-xl">🍸</span>
                                <span>Submit Answer</span>
                            </span>
                        )}
                    </button>
                </div>
            </div>
        )}
    </div>
}