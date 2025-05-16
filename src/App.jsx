
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home'
import Login from './pages/login'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/test-deploy-project' element={<Home/>}/>
          <Route path='/test-deploy-project/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
