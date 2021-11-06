import React,{useEffect,useState,useContext} from 'react'
import ResultCard from './ResultCard'
import style from '../styles/panelBox.module.scss';
import { MainContext } from '../state/contextBase';
export default function ResultPage() {
    const [scoreArray,setScores]=useState([])
    const state=useContext(MainContext);
    useEffect(() => {
       try{
        let items=localStorage.getItem('score')
        items=JSON.parse(items);
        if(!items){items=[]}
            setScores(items);
       }catch(e){

       }
    }, [])

    let list=scoreArray.map((obj,index)=><ResultCard score={obj} key={index}></ResultCard>)
    return (
        <div>
            <div className={style.scoreBox}>
                {list}
            </div>
            
            <div className={style.buttonBox}>
                <button onClick={()=>state.dispatch({type:'BackToMain'})}>Back</button>
            </div>
        </div>
    )
}
