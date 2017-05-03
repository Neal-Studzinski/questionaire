import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import Nav from './nav.js';

class Start extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main className = 'page-frame'>
                <section className = 'page-content'>
                    <h2>Welcome to the Survey</h2>
                    <p>Please complete each of the 10 questions</p>
                    <button id = 'start' onClick={() => this.props.history.push('/question/1')}
                        type="button">Start
                    </button>
                    <Nav />
                </section>
            </main>
        );
    }
}
export default connect (container.allState)(Start);
