import React,{useContext,useEffect} from 'react'
import { MainContext } from '../state/contextBase';
import '../styles/footer.scss'

export default function QuizBoxFooter() {
    const state=useContext(MainContext);
    let isLastQuestion=(state.main.currentQuestion === state.main.TotalQuestions-1)
    return (
        <div className="footer">
            {!isLastQuestion && <button onClick={()=>state.dispatch({type:'NextQuestion'})}>next</button>}
            {isLastQuestion && <button onClick={()=>state.dispatch({type:"TestOver"})}>Submit</button>}

        </div>
    )
}
