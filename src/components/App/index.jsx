import React, {Component} from 'react'
import {Route} from 'react-router-dom';
import MyReads from '../MyReads'
import Search from '../Search'
import * as BooksAPI from '../../utils/BooksAPI'

class App extends Component {
  state = {
    currentlyReading: {},
    wantToRead: {},
    read: {},
    allBooks: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => {
      this.setState({allBooks: response});
    }).then(() => {
      Object.keys(this.state.allBooks).forEach((key) => {
        let book = this.state.allBooks[key];
        if (book.shelf === "currentlyReading") {
          this.setState({
            currentlyReading: [
              ...this.state.currentlyReading,
              book
            ]
          });
        } else if (book.shelf === "wantToRead") {
          this.setState({
            wantToRead: [
              ...this.state.wantToRead,
              book
            ]
          });
        } else {
          this.setState({
            read: [
              ...this.state.read,
              book
            ]
          })
        }
      });
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/' render={() => (
          <MyReads
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
          />
        )} exact/>
        <Route path='/search' render={() => (<Search/>)}/>
      </div>
    );
  }
}

export default App;
