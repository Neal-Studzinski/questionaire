import React from 'react';
import container from '../containers.all.js';
import { connect } from 'react-redux';




export default function server (question,answer) {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
    //Before ajax call dispatch any needed actions
    dispatch( { type: "ANSWER_QUESTION",id: id, answer: answer });

    //Do the ajax call
    return  $.ajax({
      url: "https://api.backendless.com/v1/data/Input_Answers",
      type: 'POST',
      data: JSON.stringify({
          "id": question.id,
          "question": question.question,
          "answer": question.answer
      }),
      headers: {
        "application-id": "7260D185-9F0F-7E8E-FF48-AEF51015CF00",
        "secret-key": "6ED8C4FA-1C9B-1151-FF0F-80D0D35A9200",
        "Content-Type": "application/json",
        "application-type": "REST"
      }
      data: {
      }
  }).then(function (d,s,x) {
      //After the ajax call dispatch any needed actions
      console.log("response ",d,s,x)
      dispatch( { type: "SERVER_GOT_USERS_ANSWER", data:d });
    })
  }
}
