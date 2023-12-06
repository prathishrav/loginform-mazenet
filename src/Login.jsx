import React from 'react';

function Login(props) {
    return (
        <div className='main-sec'>
            
          
            <img src="/TEST-PAGE/Rectangle 99.png" alt="rectangle" className='rectangle' />
            <img src="/TEST-PAGE/Ellipse 12.png" alt="ellipse" className='ellipse' />
            <div className="sec-1">
                <img src="/TEST-PAGE/Mazenet Logo PNG 1.png" alt="" className='logo' />
                <h2>Login to your account</h2>
                <input className='textbox' type="text" placeholder='Your email address' /> <br />
                <input className='textbox' type="text" placeholder='*******'/> <br />
                <div className='cb'>   <input type="checkbox" name="" id="" placeholder='Remember username' /> <span className='rm'>Remember username</span></div> <br />
                <button className='btn'>SUBMIT</button> <br />
                <span className='span1'>Forgot password?</span>

            </div>
            <div className='sec-2'>
                <img src="/TEST-PAGE/Mask group.png" alt="groupimhg" className='groupimg'/>
            </div>
           
        </div>
    );
}

export default Login;
