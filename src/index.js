import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram/dist/milligram.min.css'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Result from './components/Result'

const Test = () => (
  <div className='container'>
    <Header/>
    <SearchBar/>
    <Result/>
  </div>
)

let root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<Test/>, root)
