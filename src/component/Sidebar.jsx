import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="logo">Logo</div>
        <ul className="sidebar-ul">
          <li>Home</li>
          <li>About</li>
          <li>Contect</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  )
}
