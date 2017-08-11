import React, {Component} from 'react'

class Book extends Component {
   handleChange = (e, props) => {
    this.props.updateShelf(props,e.target.value)
  }

  render(){
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`
            }}></div>
            <div className="book-shelf-changer">
              <select value="" onChange={(e) => this.handleChange(e, this.props.book)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors.join(',')}</div>
        </div>
      </li>
    );
  }
}

export default Book;
