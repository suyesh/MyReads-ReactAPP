import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import MyReads from '../MyReads'
import Search from '../Search'
import * as BooksAPI from '../../utils/BooksAPI'

class App extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    allBooks: [],
    none: [],
    query: '',
    searchResults: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    BooksAPI.search(this.state.query, '5').then((books) => {this.setState({searchResults: books})})
    console.log(this.state.searchResults)
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => {
      this.setState({allBooks: response});
    }).then(() => {
      this.state.allBooks.forEach((book) => {
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
        } else if (book.shelf === 'read') {
          this.setState({
            read: [
              ...this.state.read,
              book
            ]
          })
        } else {
          this.setState({
            none: [
              ...this.state.none,
              book
            ]
          })
        }
      });
    })
  }

  clearSearchResults = () => (
    this.setState({
      searchResults: "",
      query: ""
    })
  )

  removeFromShelf = (book) => {
    if (this.state.currentlyReading.indexOf(book) > -1) {
      let new_currentlyReading = this.state.currentlyReading
      new_currentlyReading.splice(this.state.currentlyReading.indexOf(book), 1)
      this.setState({currentlyReading: new_currentlyReading})

    } else if (this.state.wantToRead.indexOf(book) > -1) {
      let new_wantToRead = this.state.wantToRead
      new_wantToRead.splice(this.state.wantToRead.indexOf(book), 1)
      this.setState({wantToRead: new_wantToRead})

    } else if (this.state.read.indexOf(book) > -1) {
      let new_read = this.state.read
      new_read.splice(this.state.read.indexOf(book), 1)
      this.setState({read: new_read})

    } else if (this.state.none.indexOf(book) > -1) {
      let new_none = this.state.none
      new_none.splice(this.state.none.indexOf(book), 1)
      this.setState({none: new_none})
    }
  }

  updateShelf = (book, shelf) => {
    this.removeFromShelf(book);
    BooksAPI.update(book, shelf).then((response) => {
    })
    if (shelf === "currentlyReading") {
      this.setState({
        currentlyReading: [
          ...this.state.currentlyReading,
          book
        ]
      })
    } else if (shelf === "wantToRead") {
      console.log("WANTREAD")
      this.setState({
        wantToRead: [
          ...this.state.wantToRead,
          book
        ]
      })
    } else if (shelf === "read") {
      this.setState({
        read: [
          ...this.state.read,
          book
        ]
      })
    } else if (shelf === "none") {
      this.setState({
        none: [
          ...this.state.none,
          book
        ]
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route path='/' render={() => (
          <MyReads
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            updateShelf={this.updateShelf}/>)}
            exact/>
        <Route path='/search' render={() => (
          <Search
            searchResults={this.state.searchResults}
            inputValue={this.state.query}
            updateQuery={this.updateQuery}
            updateShelf={this.updateShelf}
            clearSearchResults={this.clearSearchResults}/>
          )}/>
      </div>
    );
  }
}

export default App;
