import './Login.css'
import React from 'react'
import { useState } from 'react'
import {useLogin} from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const navigate = useNavigate()

// login hook
const {error, isPending, login} = useLogin()

const handleSubmit = (e) => {
  e.preventDefault()
login(email, password)
if(!error && !isPending){
  navigate('/dashboard')
}
}

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
    <h2> Login</h2>
    <label>
      <span>Email</span>
      <input 
      type="email"
      required
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      />
    </label>
    <label>
      <span>Password:</span>
      <input 
      type="password"
      required
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
    </label>
{!isPending && <button className='btn'>Login</button>}
{isPending && <button className='btn' disabled>Loading...</button>}
{error && <div className='error'>{error}</div>}
  </form>
  )
}
