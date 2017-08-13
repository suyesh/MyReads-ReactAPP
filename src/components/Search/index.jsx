import React, {Component} from 'react'
import Book from '../Book'
import {Link} from 'react-router-dom'

class Search extends Component {
  render() {
    let searchResults = [];
    if (this.props.searchResults && this.props.searchResults.length > 0){
      searchResults = this.props.searchResults
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={()=> this.props.clearSearchResults()} >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.props.inputValue} onChange={(e) => this.props.updateQuery(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.length > 0 ? searchResults.map((book) => (
              <Book
                key={book.id} book={book}
                updateShelf={this.props.updateShelf}
              />)) : null}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search
