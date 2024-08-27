import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Form from './Components/Form.jsx'
import Counter from './Components/Counter/Counter.jsx'
import BG from './Components/BGChanger/BG.jsx'
import Carousel from './Components/carouselslider/Carousel.jsx'
import Lifting from './Components/LiftingStateUp/Lifting.jsx'
import Todo from './Components/Todo/Todo.jsx'
import { UseRefEx } from './Components/useRef/UseRefEx.jsx'
import { ForwardRefEx } from './Components/forwardRef/ForwardRefEx.jsx'
import { UseIdEx } from './Components/useId/UseIdEx.jsx'
import { User } from './Components/propDrilling/User.jsx'
import {UserProvider } from './Components/ContexApi/UserContex.jsx'
import HomeConsumer from './Components/ContexApi/HomeConsumer.jsx'
import FooterConsumer from './Components/ContexApi/FooterConsumer.jsx'
import App from './Components/ContexApi/App.jsx'
import LogApp from './Components/CustomHook/LogApp.jsx'
import ThemeApp from './Components/Theme/ThemeApp.jsx'
import CounterApp from './Components/UseReducer/CounterApp.jsx'
import FormApp from './Components/UseReducer/FormApp.jsx'
import CounterWithMemo from './Components/ReactMemo/CounterWithMemo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <LogApp/> */}
    {/* <FormApp/> */}
    <CounterWithMemo/>
    {/* <CounterApp/> */}
    {/* <ThemeApp/> */}
    {/* <Form /> */}
    {/* <Counter/> */}
    {/* <BG/> */}
    {/* <Carousel/> */}
    {/* <Lifting/> */}
    {/* <Todo/> */}
    {/* <UseRefEx/> */}
    {/* <ForwardRefEx/> */}
    {/* <UseIdEx/> */}
    {/* <User/> */}
  </React.StrictMode>,
)
