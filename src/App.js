import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import About from './pages/About'
import Users from './pages/Users'
import Topics from './pages/Topics'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon" exact component={Home} />
        <Route path="/pokemon/:id" component={Pokemon} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/topics" component={Topics} />
        <Route path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
