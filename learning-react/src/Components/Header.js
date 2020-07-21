import React from 'react'
import Navigation from './Navigation'
function Header(){
    return (
        <header className="bg-actual-gray  text-white border-b p-3 flex justify-between items-center ">
            <span className="font-bold">LiftM8</span>
            <Navigation />
        </header>
    )
}

export default Header;