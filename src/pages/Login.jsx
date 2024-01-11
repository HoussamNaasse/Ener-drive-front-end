import React, { useState } from 'react'

export const LoginSignup = () => {

    const[action, setAction] = useState(false);
    const handleLogin=()=>{
        action ? setAction(false) : window.location.replace(window.location.origin+"/")
    }
    const handleRegister=()=>{
        action ?  window.location.replace(window.location.origin+"/") : setAction(true)
    }
  return (
    <div className='container'>
        <div className='enerdrive'>
            
        </div>
        <div className='left-container'>
        <div className="header">
           <div className="text">WELCOME TO ENER<span className='span'>DRIVE</span></div> 
           <div className="text1">{action?"You dont have an Account?":"You Already have an account?"}</div>
           <div className="underline"></div>
        </div>
        <div className="inputs">
            {action && <><h3 className='label'>Name</h3>
            <div className="input">
                <input type="text"/>
            </div></>}
        
        </div>
        <div className="inputs">
        <h3 className='label'>Email</h3>
            <div className="input">
            
                <input type="email" />
            </div>
        </div>
        <div className="inputs">
        <h3 className='label'>Password</h3>
            <div className="input">
                
                <input type="password"/>
            </div>
        </div>
        <div className="submit-container">
            <div  className={action?"submit gray":"submit"} onClick={handleLogin}>Login</div>
            <div className={!action?"submit gray":"submit"} onClick={handleRegister}>Register</div>
        </div>
        </div>
        <div className='right-container'>
        </div>
    </div>
  )
}
export default LoginSignup
