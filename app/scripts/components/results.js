import React from "react";
import { connect } from 'react-redux';
import { Route, Link, NavLink} from 'react-router-dom';
import container from '../containers/all.js';
import Question from './question.js';
import AppReducer from '../reducers/app_reducer.js'
class Result extends React.Component {
    constructor(props) {
        super(props);
    }



  render() {
      return (
          <div>
        {this.props.question.map((question, index) => {
          return <div key={index}>{question.question}</div>;
        })}
        {this.props.answer.map((answerInput, index) => {
          return <div key={index}>{answer}</div>;
        })}
      </div>

      )


}
}
export default connect(container.allState)(Result);
