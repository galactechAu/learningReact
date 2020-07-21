import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu  from './NavigationMenu'


function Navigation(){
    const [showMenu, setShowMenu] = useState(false)
    const maskTransistions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransition = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
    return (
        <nav className="text-white">
            <span className="text-xl"> 
                <FontAwesomeIcon
                icon ={faBars}
                onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {
                maskTransistions.map(({ item, key, props }) =>
                item && <animated.div 
                key={key} 
                style={props}
                className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                onClick={ ()=> setShowMenu(false)}
                >
                </animated.div>
                )
            
            }
            {
                menuTransition.map(({ item, key, props }) =>
                item && <animated.div 
                key={key} 
                style={props}
                className="fixed bg-actual-gray top-0 left-0 w-4/5 text-white z-50 h-full p-3"
                >
                    <NavigationMenu
                    closeMenu ={()=> setShowMenu(false)} />

                </animated.div>
                )
            
            }
        </nav>
        )
}

export default Navigation;