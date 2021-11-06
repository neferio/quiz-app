import React,{useEffect,useState,useContext} from 'react'
import { MainContext } from '../state/contextBase';
import style from '../styles/timer.module.scss'

export default function QuizTimer(props) {
    const state=useContext(MainContext);
    const [counter,SetCounter]=useState(60);
    useEffect(()=>{
        if(counter !== 0){
            const interval=setInterval(()=>{
                SetCounter(counter-1)
            },1000)
            return ()=>{
                clearInterval(interval);
            }
        }else{
            if(!props.isLast){
                state.dispatch({type:'NextQuestion'})
            }
            else{
                state.dispatch({type:"TestOver"})
            }
        }
    },[counter])

    useEffect(()=>{
        SetCounter(60)
    },[state.main.currentQuestion])

    return (
        <div className={style.timer}>
            Timer:{counter}s
        </div>
    )
}
