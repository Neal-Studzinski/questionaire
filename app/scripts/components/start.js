import React from 'react';

class Start extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
            <h2>Welcome to the Survey</h2>
            <p>Please complete each of the 10 questions</p>
            <button onClick={() => this.props.history.push('/question/1')}
              type="button">Start
            </button>
            <p>Hi</p>
            </main>
        );
    }
}
export default Start
