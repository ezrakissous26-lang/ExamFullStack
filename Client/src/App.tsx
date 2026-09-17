import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='login'/>
      <Route path='register'/>
      <Route path='getpost'/>
      <Route path='postposts'/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
