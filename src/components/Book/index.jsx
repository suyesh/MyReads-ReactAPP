import React, {Component} from 'react'

class Book extends Component {
  state = {
    value: ""
  }

   handleChange = (e, props) => {
     this.setState({
       value: e.target.value
     })
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
              backgroundImage: `url("${this.props.book.imageLinks !== undefined ? this.props.book.imageLinks.thumbnail : null}")`
            }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={(e) => this.handleChange(e, this.props.book)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title !== undefined ? this.props.book.title : null}</div>
          <div className="book-authors">{this.props.book.authors !== undefined ? this.props.book.authors.join(',') : null}</div>
        </div>
      </li>
    );
  }
}

export default Book;
