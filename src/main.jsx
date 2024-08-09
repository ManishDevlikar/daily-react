import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Form from './Components/Form.jsx'
import Counter from './Components/Counter/Counter.jsx'
import BG from './Components/BGChanger/BG.jsx'
import Carousel from './Components/carouselslider/Carousel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Form /> */}
    {/* <Counter/> */}
    {/* <BG/> */}
    <Carousel/>
  </React.StrictMode>,
)
