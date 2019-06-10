import React, { Component } from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <Router>
        <div>
          <SavedList list={this.state.savedList} />
          <div>Replace this Div with your Routes</div>
        </div>
      </Router>
    );
  }
}
