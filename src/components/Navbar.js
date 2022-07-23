// styles
import './Navbar.css'
import Temple from '../assets/temple.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Navbar() {
    const {logout, isPending} = useLogout()
    const {user} = useAuthContext()
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
<img src={Temple} alt="logo"/>
<span>The DojoPM</span>
            </li>
            <li>
{!user && <Link to="/login">Login</Link>}
{!user && <Link to="/signup">Signup</Link>}
{user && <li className='btn' onClick={logout}>Logout</li> }
            </li>
        </ul>
    </div>
  )
}
