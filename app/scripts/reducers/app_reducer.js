let questionsArray = [
    {
        id: 1,
        question: "What city were you born in?",
        answer: null
    },
    {
        id: 2,
        question: "What is your favorite color?",
        answer: null
    },
    {
        id: 3,
        question: "What is your drink of choice?",
        answer: null
    },
    {
        id: 4,
        question: "What about your favorite meal?",
        answer: null
    },
    {
        id: 5,
        question: "What is your favorite holiday?",
        answer: null
    },
    {
        id: 6,
        question: "What is your favorite sport?",
        answer: null
    },
    {
        id: 7,
        question: "What are some of your favorite restaraunts?",
        answer: null
    },
    {
        id: 8,
        question: "What kind of car do you drive?",
        answer: null
    },
    {
        id: 9,
        question: "How old are you?",
        answer: null
    },
    {
        id: 10,
        question: "Who is your favorite actor?",
        answer: null
    }
];

let initialState = {
    question: questionsArray
};

export default function AppReducer(currentState, action) {
    if (currentState === undefined) {
        return initialState;
    }

    switch (action.type) {
        case "SET_ANSWER":
            let newState = currentState.question.slice();
            newState.forEach((question, i, array) => {
                if (question.id == Number(action.answerId)) {
                    question.answer = action.answerInput;
                }
            });

            return Object.assign({}, currentState, { question: newState });

        case "ANSWER_QUESTION":
        //dispatch(server(question));


        default:
            return state;
    }
}
