import React ,{useContext}from 'react'
import style from '../styles/panelBox.module.scss';
import { MainContext } from '../state/contextBase';


export default function StartBox() {
    const state=useContext(MainContext);
    return (
        <React.Fragment>
            <div className={style.innerBox}>
                <div className={style.heading}>
                    <h2>Quiz</h2>
                </div>
                <div className={style.buttonBox}>
                    <button className={style.red} onClick={()=>state.dispatch({type:'StartQuiz'})}>Start Quiz</button>
                    <button className={style.green} onClick={()=>state.dispatch({type:'ResultPage'})}>View Results</button>
                </div>
            </div>
           
        </React.Fragment>
    )
}
