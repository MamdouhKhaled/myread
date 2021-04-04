import React from 'react'
import { Route } from "react-router-dom"
import './App.css'

import Home from "./components/home/home.js"
import Search from "./components/search/search.js"

class BooksApp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/search" render={() => <Search />} />
            </React.Fragment>
        )
    }
}

export default BooksApp
