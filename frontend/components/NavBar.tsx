import React from 'react'
import { navItems } from '@/data'

const NavBar = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center">
            <a href="/">
            <img
                src="/sunlife_logo.svg"
                alt="Sun Life Logo"
                className="h-8 mr-4"
            />
            </a>
            <nav className="hidden md:flex space-x-4">
                {navItems.map((item, index) => (
                    <a key={index} href={item.link} className="hover:text-blue-600">
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
        <div className="flex space-x-4">
          <button className="hover:text-blue-600">Support</button>
          <button className="hover:text-blue-600">Canada</button>
          <button className="hover:text-blue-600">English</button>
          <button className="hover:text-blue-600">Sign in</button>
          <button className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600">
            Get started
          </button>
        </div>
      </header>
  )
}

export default NavBar

{/* <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-blue-600">Investments</a>
            <a href="#" className="hover:text-blue-600">Insurance</a>
            <a href="#" className="hover:text-blue-600">Health</a>
          </nav> */}