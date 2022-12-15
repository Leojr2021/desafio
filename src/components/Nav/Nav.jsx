import React from 'react'
import './Nav.scss'

const Nav = () => {

    
     
    return (
      
      <nav>
        <div className="nav_logo"><img src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671081451/it%20glober/pufi_logo_smss4g.png" alt="pufi logo" /></div>
        <div className="nav_elements">
            <div className="nav_element-detail">
            <img src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671081451/it%20glober/logo_puff_1_psncp8.png" alt="" />
            <p>PUFI PUFF</p>
            </div>
            <div className="vertical_line"></div>
            <div className="nav_element-detail">
            <img src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671081451/it%20glober/logo_rain_1_cm74pm.png" alt="" />
            <p>PUFI RAIN</p>
            
            </div>
            <div className="vertical_line"></div>
            <div className="nav_element-detail">
            <img src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671081451/it%20glober/logo_cart_1_rx1pik.png" alt="" />
            <p>PUFI CART</p>
            </div>
            <div className="vertical_line"></div>
            <div className="nav_element-detail">
            <img src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671081451/it%20glober/logo_nap_1_nygnsa.png" alt="" />
            <p>PUFI NAP</p>
            </div>
            
        </div>
        <div className="nav_login">
        
            <p> <a href="#"  rel="noopener noreferrer">MI CUENTA</a></p>
            <div className="vertical_line-login"></div>
            <p><a href="#"  rel="noopener noreferrer">MI COMPRA</a></p>
        </div>
      </nav>
      
    )
  }
  
  
  
  export default Nav