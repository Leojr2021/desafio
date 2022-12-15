import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

import './Products.scss'

const Products = () => {

    
     
    return (
      <div className="hoverImages">

        <div className="products_grid">
            <div className="products_grid-img-left img-wrapper">
                <img className="zoom blur" src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671087858/it%20glober/umbrellas_pibaej.jpg" alt="" />
                <div className="content fade ">
                <div className="button">SHOP</div>
                </div>
            </div>
            <div className="products_grid-text-right">
                <div className="products_grid-right-container">
                <img src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671088755/it%20glober/rain_lmdyie.png" alt="" />
                <h2>Pufi RAIN</h2>
                <div className="horizontal_line"></div>
                <p>Descripcion del producto</p>
                <div className="link_more">
                    
                    <p><a href=""><span> <IoIosArrowForward/> </span>VER MAS</a> </p>
                </div>
                </div>  
            </div>
        </div>
        <div className="products_grid">
            
            <div className="products_grid-text-left">
                <div className="products_grid-right-container">
                <img src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671088755/it%20glober/puff_mu8jat.png" alt="" />
                <h2>Pufi PUFF</h2>
                <div className="horizontal_line"></div>
                <p>Descripcion del producto</p>
                <div className="link_more">
                    
                    <p><a href=""><span> <IoIosArrowForward/> </span>VER MAS</a> </p>
                </div>
                </div>  
            </div>
            <div className="products_grid-img-right img-wrapper">
                <img className="zoom blur" src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671087858/it%20glober/umbrellas_pibaej.jpg" alt="" />
                <div className="content fade ">
                <div className="button">SHOP</div>
                </div>
            </div>
        </div>

        <div className="products_grid">
            <div className="products_grid-img-left img-wrapper">
                <img className="zoom blur" src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671087858/it%20glober/umbrellas_pibaej.jpg" alt="" />
                <div className="content fade ">
                <div className="button">SHOP</div>
                </div>
            </div>
            <div className="products_grid-text-right">
                <div className="products_grid-right-container">
                <img src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671088755/it%20glober/cart_ldz05c.png" alt="" />
                <h2>Pufi CART</h2>
                <div className="horizontal_line"></div>
                <p>Descripcion del producto</p>
                <div className="link_more">
                    
                    <p><a href=""><span> <IoIosArrowForward/> </span>VER MAS</a> </p>
                </div>
                </div>  
            </div>
        </div>
        <div className="products_grid">
            
            <div className="products_grid-text-left">
                <div className="products_grid-right-container">
                <img src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671088755/it%20glober/nap_kjpr4i.png" alt="" />
                <h2>Pufi NAP</h2>
                <div className="horizontal_line"></div>
                <p>Descripcion del producto</p>
                <div className="link_more">
                    
                    <p><a href=""><span> <IoIosArrowForward/> </span>VER MAS</a> </p>
                </div>
                </div>  
            </div>
            <div className="products_grid-img-right img-wrapper">
                <img className="zoom blur" src="https://res.cloudinary.com/dr8u3dssn/image/upload/v1671087858/it%20glober/umbrellas_pibaej.jpg" alt="" />
                <div className="content fade ">
                <div className="button">SHOP</div>
                </div>
            </div>
        </div>
        

      </div>
     
      
    )
  }
  
  
  
  export default Products