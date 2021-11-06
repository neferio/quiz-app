import React,{useContext} from 'react'
import { MainContext } from '../state/contextBase';
import QuizTimer from './QuizTimer';
import style from '../styles/quizHeader.module.scss'
import ProgressBar from './ProgressBar';

export default function QuizBoxHeader() {
    const state=useContext(MainContext);
    return (
        <div className={style.quizHeader}>
            <div className={style.header}>
                <div className={style.heading}>Question Number : {state.main.currentQuestion+1}</div>
                <QuizTimer isLast={state.main.currentQuestion === state.main.TotalQuestions-1}></QuizTimer>
            </div>
            <ProgressBar></ProgressBar>
            
        </div>
    )
}
