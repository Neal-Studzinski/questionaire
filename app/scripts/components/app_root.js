import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import Start from './start.js';
import Quest1 from './question/1.js';


const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/start.js">Start</NavLink>
      <br />
      <NavLink to="/questions/0">Questions</NavLink>
      <br />
      <NavLink to="/results">Results</NavLink>
    </nav>
);
};

class AppRoot extends React.Component {
  constructor (props) {
    super(props);
  }



  render () {
    return (
      <main>
        <NavBar/>
        <section>
        <h2>Welcome to the Survey</h2>
        <p>Please complete each of the 10 questions</p>
        <button onClick={() => this.props.history.push('/question/1')}
          type="button">Start
        </button>

        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
