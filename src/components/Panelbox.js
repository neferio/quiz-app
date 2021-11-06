import React,{useReducer,useEffect,useContext} from 'react'
import style from '../styles/panelBox.module.scss';
import StartBox from './StartBox';
import { MainContext } from '../state/contextBase';
import QuizBox from './QuizBox';
import SpecificResult from './SpecificResult';
import ResultPage from './ResultPage';

export default function Panelbox() {
    const state=useContext(MainContext);
    useEffect(()=>{
        if(state.main.isSpecificResult){
            try{
                let items=localStorage.getItem('score')
                items=JSON.parse(items);
                if(!items){items=[]}
                items.push(state.main.score);
                localStorage.setItem('score',JSON.stringify(items))
            }catch(e){
                console.log("error")
            }
        }
    },[state.main.isSpecificResult])
    return (
        <div className={style.mainBox}>
                {!state.main.isQuizStarted && !state.main.isSpecificResult && !state.main.isResultPage && <StartBox></StartBox>}
                {state.main.isQuizStarted && <QuizBox></QuizBox>}
                {state.main.isSpecificResult && <SpecificResult></SpecificResult>}
                {state.main.isResultPage && <ResultPage></ResultPage>}

        </div>
    )
}
