let questionsArray = [
    {
        id: 1,
        question: 'What city were you born in?',
        answer: ''
    },
    {
        id: 2,
        question: 'What is your favorite color?',
        answer: ''
    },
    {
        id: 3,
        question: 'What is your drink of choice?',
        answer: ''
    },
    {
        id: 4,
        question: 'What about your favorite meal?',
        answer: ''
    },
    {
        id: 5,
        question: 'What is your favorite holiday?',
        answer: ''
    },
    {
        id: 6,
        question: 'What is your favorite sport?',
        answer: ''
    },
    {
        id: 7,
        question: 'What are some of your favorite restaraunts?',
        answer: ''
    },
    {
        id: 8,
        question: 'What kind of car do you drive?',
        answer: ''
    },
    {
        id: 9,
        question: 'How old are you?',
        answer: ''
    },
    {
        id: 10,
        question: 'Who is your favorite actor?',
        answer: ''
    },

];

let initialState = {
    question: questionsArray
};


export default function AppReducer (currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {
      case ('SET_ANSWER'):
        let newState = currentState;
        newState.question.forEach( (question, i, array) => {
            if(question.id == Number(action.answerId)) {
                question.answer = action.answerInput;

            }
            //console.log(question.question, question.answer)

        } );

        console.log(newState);
        return newState;




     default :
         return state;
     }

}
