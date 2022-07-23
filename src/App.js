//Styles
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages and Components
import Dashboard from './pages/Dashboard/Dashboard'
import Project from './pages/Project/Project'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Create from './pages/Create/Create'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuthContext } from './hooks/useAuthContext'
import OnlineUsers from './components/OnlineUsers'



function App() {

  const {authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
      </BrowserRouter>
      <div className='container'>
      <BrowserRouter>
      <Navbar />
<Routes>
  {user && <Route exact path='/' element={<Dashboard />} />}
  {user && <Route path='/project' element={<Project />} /> }
  {user && <Route path='/projects/:id' />}
  {!user && <Route path='/login' element={<Login />} /> }
  {user && <Route path='/create' element={<Create />} /> }
  {!user && <Route path='/signup' element={<Signup />} /> }
</Routes>
</BrowserRouter>
</div>
{user && <OnlineUsers />}
</div>
  );
}

export default App
