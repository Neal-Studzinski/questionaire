import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import Question from "./question.js";
import AppReducer from "../reducers/app_reducer.js";
import server from "../actions/server.js";

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Results</h1>

                <div>
                    {this.props.question.map((question, index) => {
                        return (
                            <div key={index}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {question.question}
                                            </td>

                                            <td>
                                                {question.answer}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        );
                    })}
                    //{this.props.question.map((answerInput, index) => {
                        //    return <div key={index}>{answerInput}</div>;
                    })}

                </div>
            </div>
        );
    }
}
export default connect(container.allState)(Result);
