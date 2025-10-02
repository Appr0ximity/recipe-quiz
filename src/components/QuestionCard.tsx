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


    return <div className="">
        <div className="text-2xl">{nameOfCocktail}</div>
        <div>
            What is the number of Ingredients for {nameOfCocktail}<input onChange={checkNoOfIngredients} className="border-2 m-2 rounded-sm" type="number" />
        </div>
        {numberCorrect && <div>
            {Array.from({length: numberOfInputs}).map((_,index):ReactNode=>{
                return <div key={index}>
                    Name of the ingredient <input disabled={submitted} onChange={e => changeAnswers(index, "item", e.target.value)} type="text" id="name"/>
                    Measurement for the ingredient <input disabled={submitted} onChange={e => changeAnswers(index, "measurement", e.target.value)} type="text" id="measurement"/>
                </div>
            })}
            <button onClick={submitQuestion}>Submit</button>
        </div>}
    </div>
}