import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CurrentlyReading from '../CurrentlyReading'
import WantToRead from '../WantToRead'
import Read from '../Read'

class MyReads extends Component {
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading books={this.props.currentlyReading} updateShelf={this.props.updateShelf}/>
            <WantToRead books={this.props.wantToRead} updateShelf={this.props.updateShelf}/>
            <Read books={this.props.read} updateShelf={this.props.updateShelf}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MyReads;
