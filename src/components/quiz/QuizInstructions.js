import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>ProQuiz Instructions</title></Helmet>
        <div className="instructions container">
            <h1>How to Play the Game</h1>
            <p>Make sure you read this guide from start to finish before playing the game</p>
            <ul className="browser-default" id="main-list">
                <li>The game lasts for 15 minutes and it ends as soon as your time elapses</li>
                <li>Each game consists of 15 questions</li>
                <li>Each question contains 4 possible answers</li>
                <li>Select the correct answer by click on it</li>
                <li>Each game has 2 features namely:
                    <ul id="sublist">
                        <li>•Page Counter</li>
                        <li>•Timer</li>
                    </ul>
                </li>
                <li>
                    The page counter allows you to know at what questions number you are currently
                </li>
                <li>
                    This will help you track your progress in the quiz
                </li>
                <li>
                    The timer
                    <span className='mdi mdi-clock-outline mdi-24px timer'></span>
                    will start at 2 minutes. Once the time is up, the game will end
                </li>
                <li>Feel free to quit the game at any time. In that case your score will be shown afterwards</li>
                <li>The timer starts as soon as the game loads</li>
                <li>Do you have what it takes to get a perfect score? Press Play to start!</li>
            </ul>
            <div>
                <br></br>
                <span className="center"><Link to="/">No, go back.</Link></span>
                <br></br>
                <br></br>
                <span className="right"><Link to="/play/quiz">Yes, let's Play!</Link></span>
            </div>
        </div>
    </Fragment>
)

export default QuizInstructions;