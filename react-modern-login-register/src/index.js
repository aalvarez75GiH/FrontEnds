import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import './App.css'

const container = document.getElementById('root')

reactDom.render(

    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    container
)