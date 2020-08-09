import React from 'react'
import {render} from 'react-dom'
import Welcome from './src/Pages/welcome'



const App = () => (
    <div>
        <Welcome></Welcome>
    </div>

)


render(<App />, document.querySelector('#root'))