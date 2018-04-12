import React from 'react'
import ReactDOM from 'react-dom'
import 'bulmaswatch/lumen/bulmaswatch.min.css'
import MiniVirkr from './app'

// Create somewhere to hang React
let root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<MiniVirkr/>, root)
