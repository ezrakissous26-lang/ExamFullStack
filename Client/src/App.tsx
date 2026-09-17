import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import GetPost from './Pages/GetPost'
import Login from './Pages/Login'
import Register from './Pages/register'
import PostPost from './Pages/PostPost'
import ProtectedRoute from './Components/ProtectedRoute'



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/getpost' element={<ProtectedRoute> <GetPost/> </ProtectedRoute>}/>
      <Route path='/post' element={<ProtectedRoute> <PostPost/> </ProtectedRoute>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App