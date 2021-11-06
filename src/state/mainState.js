export const mainInitialState={
    isQuizStarted:false,
    isResultPage:false,
    isSpecificResult:false,
    ScoreArray:[],
    quizData:[],
    TotalQuestions:0,
    modifiedQuizData:[],
    score:0,
    currentQuestion:0,
    isTestOver:false
}


export const mainReducer = (state,action)=>{
    switch(action.type){
        case 'StartQuiz':
            return {...state,...{isQuizStarted:true,isResultPage:false,isSpecificResult:false}}
        case "ResultPage":
            return {...state,...{isResultPage:true,isQuizStarted:false,isSpecificResult:false}}
        case "BackToMain":
            return {...state,...{isResultPage:false,isQuizStarted:false,isSpecificResult:false}}
        case 'AddQuizData':
            return {... state,...{quizData:action.quizData}}
        case 'AddCount':
            return {... state,...{TotalQuestions:action.count}}
        case 'NextQuestion':
            return {... state,...{currentQuestion:state.currentQuestion+1}}
        case 'IncScore':
            state.score=state.score+1
            state.quizData[action.questionNumber].isCorrectMarked=true;
            return state;
        case 'TestOver':
            return {... state,...{isTestOver:true}}
        case 'submit':
            return {... state,...{isSpecificResult:true,isTestOver:true,isQuizStarted:false}}

    }
}