import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='login' element={}/>
      <Route path='register' element={}/>
      <Route path='getpost' element={}/>
      <Route path='postposts' element={}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App