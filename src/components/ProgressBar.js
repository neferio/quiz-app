import React,{useContext,useEffect} from 'react'
import '../styles/progress.scss'
import { MainContext } from '../state/contextBase';

export default function ProgressBar() {
    const state=useContext(MainContext);
    // let percentage="0%"
    // useEffect(()=>{
    //     percentage=
        
    // },[state.main.currentQuestion])
    return (
        <div>
            <div className="container">    
                <div className="progress2" style={{width:((state.main.currentQuestion+1)*10)+'%'}}>                    
                </div> 
            </div>
        </div>
    )
}
