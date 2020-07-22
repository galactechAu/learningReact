import React, { useState } from 'react'
import { Link } from "react-router-dom";

function NavigationMenu(props){
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <div className="font-bold py-3">YourLiftMate</div>
            <ul className="text-center">
                <li>
                    <Link
                        to="/" 
                        onClick={ props.closeMenu } 
                        className="py-3 border-t border-b block">
                            Main Page
                    </Link>
                </li>

                <li>
                    <Link to="/myworkouts" 
                        onClick={ props.closeMenu }  
                        className="py-3 border-b block">
                        Workouts

                    </Link>

                </li>          
            </ul>
        </div>
    )
}

export default NavigationMenu;

