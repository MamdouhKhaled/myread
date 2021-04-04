import React from "react";
import Card from "../card/card.js"

class Shelf extends React.Component {
    render() {
        const books = this.props.books;
        return (
            <div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map(book =>
                                <li key={book.id}>
                                    <Card details={book} onChangeShelf={(e) => this.props.booksOnShelf(book, e) }/>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>

            </div>
        )
    }
}

export default Shelf;