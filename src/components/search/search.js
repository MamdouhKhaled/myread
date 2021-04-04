import React from "react"
import { Link } from "react-router-dom";
import * as BooksAPI from '../../BooksAPI'

import Shelf from "../shelf/shelf.js"

class Search extends React.Component {
    state = {
        data: [],
        query: ''
    }
    handleChangeShelf = (book, e) => {
        let accept = ['currentlyReading', 'wantToRead', 'read', 'none']
        if (accept.includes(e.target.value))
            BooksAPI.update(book, e.target.value).then(() => {
                let newBooks = this.state.data.filter((e) => e.id !== book.id)
                this.setState({
                    data: newBooks
                })
            })
    }
    updateQuery = (query) => {
        this.setState({
            query: query
        })

        if (query.length === 0) {
            this.setState({ data: [] })
            return false
        }
        BooksAPI.search(query)
            .then((res) => {
                this.setState(
                    {
                        data: (res.error) ? [] : res
                    }
                )

            })
            .catch((error) => {
                this.setState({ data: [] })
            })
    }
    render() {

        return (
            <div className="app">

                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={event => this.updateQuery(event.target.value)}
                            />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <div>
                            <Shelf title="Search Result" books={this.state.data} booksOnShelf={this.handleChangeShelf} />

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Search;