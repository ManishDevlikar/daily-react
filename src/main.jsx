import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Form from './Components/Form.jsx'
import Counter from './Components/Counter/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Form /> */}
    <Counter/>
  </React.StrictMode>,
)
