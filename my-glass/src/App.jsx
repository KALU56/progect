import { useState } from 'react'
import Header from "./components/Header";
import Home from './components/Home';
import Container from './components/continer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
       
  <Home/>
  <Container/>
    </>
  )
}

export default App
