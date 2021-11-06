import React,{useContext,useState,useEffect} from 'react'
import { MainContext } from '../state/contextBase';
import style from '../styles/question.module.scss'

export default function Question() {
    const state=useContext(MainContext);
    const [selectedOption,setSelected]=useState('');
    let currentQuestion=state.main.quizData[state.main.currentQuestion];
    const selectedOptions=(e)=>{
        setSelected(e.target.value)
    }
    useEffect(() => {
        let questionIndex=state.main.isTestOver ? state.main.currentQuestion : state.main.currentQuestion-1
        let cur=state.main.quizData[questionIndex];
        if(cur?.correct_answer === selectedOption){
            console.log("correct" , questionIndex)
            state.dispatch({type:'IncScore',questionNumber:state.main.currentQuestion-1})  
        }
        setSelected('');
        if(state.main.isTestOver){state.dispatch({type:'submit'})}
    }, [state.main.currentQuestion,state.main.isTestOver])
    
    let options=currentQuestion.options.map((obj,i)=>{
        return(
            <div>
                <input type="checkbox" key={i} value={obj} name="options" onChange={selectedOptions} checked={selectedOption === obj}></input> <div className={style.option}>{obj}</div>
            </div>   
        )
    })
    return (
        <div>

            <div className={style.question}>
                {currentQuestion.question}
            </div>
            <br></br>
            {options}
        </div>
    )
}
