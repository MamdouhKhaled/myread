//import { bool } from "prop-types";
import React from "react"

class Card extends React.Component {
    render() {
        const book = this.props.details;
        const image = ( book.imageLinks !== undefined  && book.imageLinks.thumbnail !== undefined ) ? book.imageLinks.thumbnail : '';
        return (
            <div>

                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: "url(" + image + ")"
                        }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={e => this.props.onChangeShelf(e)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title"> {book.title}  </div>
                    <div className="book-authors">{book.authors}</div>
                </div>

            </div>
        )
    }
}
export default Card;