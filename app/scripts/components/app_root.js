import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import Start from './start.js';
import Results from './results.js'


class AppRoot extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <main>

        <section>
            <h2>Welcome to the Survey</h2>
            <p>Please complete each of the 10 questions</p>
            <button onClick={() => this.props.history.push('/question/1')}
                type="button">Start
            </button>
            <NavBar />
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
