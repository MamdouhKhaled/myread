import React from "react";
import { Link } from "react-router-dom"
import * as BooksAPI from '../../BooksAPI'

import Shelf from "../shelf/shelf.js"

class Home extends React.Component {
    state = {
        data: [],
    };
    componentDidMount() {
        this.getAllBooks()

    }
    handleChangeShelf = (book, e) => {
        let accept = ['currentlyReading', 'wantToRead', 'read', 'none']
        if (accept.includes(e.target.value))
            BooksAPI.update(book, e.target.value).then(() => {
                this.getAllBooks()
            })
    }
    getAllBooks() {
        BooksAPI.getAll().then(res => {
            this.setState({
                data: res
            })
        })
    }
    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>

                    <div className="list-books-content">
                        <div>
                            <Shelf title="Currently Reading" books={this.state.data.filter(book => book.shelf === "currentlyReading")} booksOnShelf={this.handleChangeShelf} />
                            <Shelf title="Want to Read" books={this.state.data.filter(book => book.shelf === "wantToRead")} booksOnShelf={this.handleChangeShelf} />
                            <Shelf title="Read" books={this.state.data.filter(book => book.shelf === "read")} booksOnShelf={this.handleChangeShelf} />
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )

    }
}
export default Home;