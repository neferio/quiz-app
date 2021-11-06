import React,{useEffect,useContext} from 'react'
import { MainContext } from '../state/contextBase';
import QuizBoxHeader from './QuizBoxHeader';
import Loading from './loading';
import Question from './Question';
import QuizBoxFooter from './QuizBoxFooter';

export default function QuizBox() {
    const state=useContext(MainContext);
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {

            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));

            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
    const transformQuizData=(data)=>{
        let count=0;
        data=data.results.map((obj,i)=>{
            obj.questionNumber=i;
            obj.options=[...[obj.correct_answer],...obj.incorrect_answers];
            obj.options=shuffleArray(obj.options)
            obj.isCorrectMarked=false;
            count++;
            return obj;
        })
        return {data,count};
    }

    useEffect(()=>{
        const getData=async ()=>{
            let response=await fetch('https://opentdb.com/api.php?amount=10')
            let result=await response.json();
            let transformedData=transformQuizData(result)
            console.log(transformedData);
            state.dispatch({type:'AddQuizData',quizData:transformedData.data})
            state.dispatch({type:'AddCount',count:transformedData.count})
        }
        getData();
    },[])

    let isLoading=!(state.main.quizData.length>0);

    return (
        <div>
            {/* heyyyy
            {state.main.quizData[state.main.currentQuestion]?.category} */}
            {isLoading && <Loading></Loading>}
            {!isLoading && <QuizBoxHeader></QuizBoxHeader>}
            {!isLoading && <Question></Question>}
            {!isLoading && <QuizBoxFooter></QuizBoxFooter>}
            
        </div>
    )
}
