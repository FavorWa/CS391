import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'


export default function App() {
  

  return (
    <div className='container'>
    <nav className='navbar sticky-top navbar-light bg-dark'>
      <h1 className='navbar-brand text-light'>Free Games</h1>
    </nav>
    <List/>
  </div>
);
}


