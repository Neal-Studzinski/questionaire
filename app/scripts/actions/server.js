import React from "react";
import container from "../containers/all.js";
import { connect } from "react-redux";
import Results from "../components/results.js";

export default function server(question) {
    //All async action creators should return a function that takes 'dispatch' as its argument
    //return function(dispatch) {
    //Before ajax call dispatch any needed actions
    //dispatch({ type: "ANSWER_QUESTION", id: id, answer: answer });
    console.log(question);
    question.forEach(q => {
        $.ajax({
            url: "https://api.backendless.com/7260D185-9F0F-7E8E-FF48-AEF51015CF00/6ED8C4FA-1C9B-1151-FF0F-80D0D35A9200/data/Input_Answers",
            type: "POST",
            data: JSON.stringify({
                id: q.id,
                question: q.question,
                answer: q.answer
            }),
            headers: {
                //"application-id": "7260D185-9F0F-7E8E-FF48-AEF51015CF00",
                //"secret-key": "6ED8C4FA-1C9B-1151-FF0F-80D0D35A9200",
                "Content-Type": "application/json",
                "application-type": "REST"
            }
        }).then(function(d, s, x) {
            //After the ajax call dispatch any needed actions
            console.log("response ", d, s, x);
        });
    });
    //Do the ajax call
}
