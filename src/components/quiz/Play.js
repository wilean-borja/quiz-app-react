import React, { useState,useEffect } from 'react';
import {Helmet} from 'react-helmet'
import M from 'materialize-css'
import questionsJson from './quizData.json'
import isEmpty from '../utils/is-empty'
import Loader from '../utils/Loader'
import { Link } from 'react-router-dom';


const Play = props => {
    // console.log(questionsJson)

    let [questions,setQuestions] = useState(questionsJson)
    let [currentQuestions,setCurrentQuestions] = useState({})
    let [nextQuestions,setNextQuestions] = useState({})
    let [previousQuestions,setPreviousQuestions] = useState({})
    let [answer,setAnswer] = useState('')
    let [numberOfQuestions,setNumberOfQuestions] = useState(0)
    let  [numberOfAnsweredQuestion,setnumberOfAnsweredQuestion] = useState(0)
    let [currentQuestionIndex,setCurrentQuestionIndex] = useState(0)
    let [score,setScore] = useState(0)
    let [correctAnswers,setCorrectAnswers] = useState(0)
    let [wrongAnswers,setWrongAnswers] = useState(0)
    let [hints,setHints] = useState(5)
    let [fiftyFifty,setFiftyFifty] = useState(2)
    let [usedFiftyFifty,setusedFiftyFifty] = useState(false)
    let [time,setTime] = useState({})
    let [isLoading,setIsloading] = useState(true)
    let interval = null;

    useEffect(()=>{
        displayQuestions(questions,currentQuestions,nextQuestions,previousQuestions)
        setIsloading(false)
    
    },[currentQuestionIndex])

    useEffect(()=>{
        startTimer()
    },[])

    const displayQuestions = (pQuestions, pcurrentQuestions,pnextQuestions,ppreviousQuestions ) =>{
        if(!isEmpty(pQuestions)){
           
            pQuestions = questions;
            pcurrentQuestions = pQuestions[currentQuestionIndex]
            pnextQuestions = pQuestions[currentQuestionIndex + 1]
            ppreviousQuestions = pQuestions[ppreviousQuestions - 1]
            const dqAnswer = pcurrentQuestions.answer;
            setCurrentQuestions({pcurrentQuestions})
            setNextQuestions(pnextQuestions)
            setPreviousQuestions(ppreviousQuestions)
            setAnswer(dqAnswer)
        }
    }

    const handleOptionClick = e => {
        if(e.target.innerHTML.toLowerCase() === answer.toLowerCase()){
            correctAnswer()
        }else{
            wrongAnswer()
        }
    }


    const correctAnswer = () => {
        M.toast({
            html: 'Correct, you will survive!',
            classes: 'toast-valid',
            displayLength:1500
        })
        // setScore(prevState=>({score:prevState.score+1}))
        
        if(nextQuestions === undefined){
            endGame()
        }else{
            setScore(score+1)
            setCorrectAnswers(correctAnswers+1)
            setCurrentQuestionIndex(currentQuestionIndex+1)
            setnumberOfAnsweredQuestion(numberOfAnsweredQuestion+1)
        }
        
        console.log(currentQuestionIndex,score)
    }

    const wrongAnswer = () => {
        navigator.vibrate(1000)
        M.toast({
            html: 'Wrong, please be more informed!',
            classes: 'toast-invalid',
            displayLength:1500
        })
        // setScore(prevState=>({score:prevState.score+1}))
        if(nextQuestions === undefined){
            endGame()
        }else{
        setWrongAnswers(wrongAnswers+1)
        setCurrentQuestionIndex(currentQuestionIndex+1)
        setnumberOfAnsweredQuestion(numberOfAnsweredQuestion+1)
        }
    }

    const handleNextButton = () =>{
        if(nextQuestions !== undefined){
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }



    // const handlePrevButton = () =>{
    //     if(previousQuestions !== undefined){
    //         setCurrentQuestionIndex(currentQuestionIndex - 1)
           
    //     }
    //     console.log(currentQuestionIndex)
    // }
    
    // const handleQuitButton = () =>{
    //    if(window.confirm('are you sure?')){
    //     window.location.href='http://localhost:3000'
    //    }
    
    // }

    const startTimer = () => {
        const countDownTime = Date.now() + 120000;
        interval = setInterval(()=>{
            const now = new Date();
            const distance = countDownTime - now
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / ( 1000 * 60))
            const seconds = Math.floor(distance %(1000*60) / 1000)
         

            if(distance <= 0) {
                clearInterval(interval)
                setTime({time:minutes,seconds})
                endGame()
            }else{
                setTime({time:minutes,seconds})
            }

        },1000);
        
    }

    const endGame = () => {
        alert('Quiz is Done!')
        
        const playerStats = {
            pScore:score,
            pNumberOfQuestions : numberOfQuestions,
            pNumberOfAnsweredQuestion : numberOfAnsweredQuestion,
            pCorrectAnswer : correctAnswers,
            pWrongAnswers : wrongAnswers
        }

        console.log(playerStats)
        setTimeout(()=>{
            props.history.push('/play/quizSummary',playerStats)
        },1000)
    }

   
    

    if (isLoading) return <Loader />;

   
    return ( 
        <>
            
            <Helmet><title>Quiz Page</title></Helmet>
            <div className="questions">
                <h2>COVID-19 Quiz</h2>
                <div className='lifeline-container'>
                    <p>
                        {/* <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span><span className='lifeline'>2</span> */}
                    </p>
                    <p>
                        {/* <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon">5</span> */}
                    </p>
                   
                </div>
                <div>
                    <p>
                        <span>{currentQuestionIndex+1} of 15</span>
                        <span className='mdi mdi-clock-outline mdi-24px timer'>{time.time}:{time.seconds}</span>
                    </p>
                </div>
                <h5>{currentQuestions.pcurrentQuestions.question}</h5>
                <div className='option-container'>
                    <p className="option" onClick={handleOptionClick}>{currentQuestions.pcurrentQuestions.optionA}</p>
                    <p className="option" onClick={handleOptionClick}>{currentQuestions.pcurrentQuestions.optionB}</p>
                </div>
                <div className='option-container'>
                    <p className="option" onClick={handleOptionClick}>{currentQuestions.pcurrentQuestions.optionC}</p>
                    <p className="option" onClick={handleOptionClick}>{currentQuestions.pcurrentQuestions.optionD}</p>
                </div>
                <div className='button-container'>
                    <button onClick={handleNextButton}>Next</button>
                    <button><Link to="/">Quit</Link></button>
                </div>
            </div>
        </>
     );
}
 
export default Play;