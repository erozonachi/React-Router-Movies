import React, { Component } from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import styled from 'styled-components';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const Container = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    &:link, &:visited {
      text-decoration: none
      color: inherit;
    }
  }

  button {
    cursor: pointer;
  }
`;

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
        <Container>
          <SavedList list={this.state.savedList} />
          <Route 
            exact
            path='/'
            component={MovieList}
          />
          <Route 
            path='/movies/:id'
            render={props => <Movie {...props} handleSaveClick={this.addToSavedList} />}
          />
        </Container>
      </Router>
    );
  }
}
