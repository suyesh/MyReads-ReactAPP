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
              this.props.books.map((book)=>(
              <Book
                key={book.id}
                book={book}
                updateShelf={this.props.updateShelf}
                bookStatus={this.props.bookStatus}
                bookStatusUpdate={this.props.bookStatusUpdate}
              />
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default CurrentlyReading
