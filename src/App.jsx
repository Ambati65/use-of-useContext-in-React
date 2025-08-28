import { useState } from 'react'
import UseContextProvider from './context/UseContext';
import Login from './components/login';
import Profile from './components/profile';
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  return (
    <UseContextProvider value={{user,setUser}}>
      <h2>Usage of userContext</h2>
      <Login/>
      <Profile/>
    </UseContextProvider>
  )
}

export default App
