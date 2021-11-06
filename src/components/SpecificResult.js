import React,{useContext} from 'react'
import { MainContext } from '../state/contextBase';
import style from '../styles/panelBox.module.scss';
export default function SpecificResult() {
    const state=useContext(MainContext);
    return (
        <div>
            <h1 className={style.heading}>Result</h1>
            <div className={style.score}>score - {state.main.score}</div>
            <div className={style.buttonBox}>
                <button onClick={()=>state.dispatch({type:'StartQuiz'})}>Start Again</button>
                <button onClick={()=>state.dispatch({type:'ResultPage'})}>View Results</button>
            </div>
        </div>
    )
}
