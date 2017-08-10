import React, {Component} from 'react'
import Book from '../Book'

class CurrentlyReading extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              Object.keys(this.props.books).map((key)=>(
              this.props.books[key] ? <Book key={this.props.books[key].id} book={this.props.books[key]}/> : null
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default CurrentlyReading
