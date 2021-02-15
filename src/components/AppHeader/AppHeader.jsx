import './AppHeader.css'
import React from 'react'

export default function AppHeader({ title }) {
  return (
    <header className="AppHeader">
      <h1>{title}</h1>
    </header>
  )
}
