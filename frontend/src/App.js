import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Addfile from './components/Articles';
import Home from './components/Home';
import ViewArticles from './components/ViewArticles';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className='container'>
            <Route path="/" exact component={Home}></Route>
            <Route path="/articles" exact component={ViewArticles}></Route>
            <Route path="/articles/add" exact component={Addfile}></Route>
            </div>
        </BrowserRouter>
    )
  }
}
