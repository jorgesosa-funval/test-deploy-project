
import { HashRouter, Route, Routes } from 'react-router'
import Home from './pages/home'
import Login from './pages/login'

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}
