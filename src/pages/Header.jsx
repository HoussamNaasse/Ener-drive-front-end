import React from 'react'
import 
 {BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (  
    <header className='headerr'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon'/>
        </div>
        <div className='header-right'>
        <h2>Welcome Houssam</h2>
        </div>
    </header>
  )
}

export default Header