import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import Topics from './pages/Topics'

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )
}

export default App
