import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import About from './components/about.js'
import Start from './components/start.js'
import Quest1 from './components/question/1.js'
const FooBar = () => (<div>Hi</div>)

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/"      component={AppRoot}/>
          <Route path="/start" component={Start} />
          <Route path="/question/1" component={Quest1} />
          
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
