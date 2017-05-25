import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import Nav from "./nav.js";
import server from "../actions/server.js";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.currentQuestion = this.currentQuestion.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    currentQuestion(questionId) {
        return this.props.question.filter((current, i, array) => {
            return current.id == questionId;
        })[0];
    }

    handlePagination(direction, current) {
        if (
            direction === "next" &&
            current < 10 &&
            this.refs.answerField.value != ""
        ) {
            this.props.history.push("/question/" + (Number(current) + 1));
        } else if (direction === "previous" && current > 1) {
            this.props.history.push("/question/" + (Number(current) - 1));
        }
    }

    handleSubmit(e, currentQuestionId) {
        e.preventDefault();
        let inputText = this.refs.answerField.value;
        this.refs.answerField.value = "";
        if (inputText != "" && inputText != undefined) {
            this.props.dispatch({
                type: "SET_ANSWER",
                answerId: currentQuestionId,
                answerInput: inputText
            });
            if (Number(currentQuestionId) < 10) {
                this.props.history.push(
                    "/question/" + (Number(currentQuestionId) + 1)
                );
            } else {
                this.props.history.push("/results");
                this.props.dispatch(server(this.props.question));
            }
        }
    }

    render() {
        var currentQuestionNumber = this.props.match.params.questionNumber;

        return (
            <section className="page-frame">

                <h2>Question {currentQuestionNumber}</h2>
                <p className="question">
                    {this.currentQuestion(currentQuestionNumber).question}
                </p>
                <form>
                    <input
                        type="text"
                        ref="answerField"
                        placeholder="Enter Answer Here"
                    />
                    <button
                        type="submit"
                        onClick={e =>
                            this.handleSubmit(e, currentQuestionNumber)}
                    >
                        Submit
                    </button>
                </form>
                <div>
                    <button
                        type="button"
                        onClick={() =>
                            this.handlePagination(
                                "previous",
                                currentQuestionNumber
                            )}
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            this.handlePagination(
                                "next",
                                currentQuestionNumber
                            )}
                    >
                        Next
                    </button>
                </div>
                <Nav />
            </section>
        );
    }
}

export default connect(container.allState)(Question);
