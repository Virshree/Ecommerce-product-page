import React, { useState } from 'react'
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';
import product1 from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";


function Navbar({cartQuantity,setCartQuantity}) {
  const [cartOpen,setCartOpen]=useState(false);
  function handleCart(){
    setCartOpen(!cartOpen);
  }
  return (
    <div className='flex m-5 p-4 ml-50 border-b  border-b-slate-300'>
        <img src={logo} alt="logo" className='w-[150px] h-[30px]'/>
        <div className='flex m-2 gap-10 ml-20 text-[hsl(220,14%,75%)] hover: text-[hsl(219,9%,45%)] cursor-pointer '>
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
        </div>
        <div className='flex ml-110 gap-5 cursor-pointer '>
            <img src={cart} alt="cart-icon" className='w-[40px]  h-[37px] p-2 'onClick={handleCart}/>
            
            {cartQuantity > 0 && (
    <span className="absolute ml-7 bg-orange-500 text-white text-xs px-2 rounded-full">
      {cartQuantity}
    </span>
  )}
         <div className='w-[300px] h-[540px]  mt-10 absolute'> 
         {cartOpen && (
  <div className="bg-white shadow-lg rounded-xl w-[320px]">
    <h2 className="font-black p-3">Cart</h2>
          <hr/>
    {cartQuantity > 0 ? (
   <div className="p-3 w-[280px]">
  
   <div className="flex items-center justify-between">
     
     <div className="flex gap-2">
       <img
         src={product1}
         alt="product"
         className="w-12 rounded-md"
       />
 
       <div>
         <p className="text-gray-400 text-[14px]">
           Fall Limited Edition Sneakers
         </p>
 
         <p className="text-gray-400 text-[13px]">
           $125.00 x {cartQuantity}{" "}
           <span className="text-black font-bold">
             ${125 * cartQuantity}.00
           </span>
         </p>
       </div>
     </div>
 
   
   </div>
   <img
       src={deleteIcon}
       alt="delete"
       className="w-4  flex ml-65 mt-[-30px]  cursor-pointer"
       onClick={() => setCartQuantity(0)}
     />
   <button  onClick={()=>setCartQuantity(0)} className="bg-[hsl(26,100%,55%)] cursor-pointer  mt-7 w-[290px] py-3 rounded-lg font-bold">
     Checkout
   </button>
 </div>


      
      
    ) : (
      <p className="text-[hsl(220,14%,75%)] m-4 p-5 text-center  h-[100px]">
        Your cart is empty.
      </p>
    )}
  </div>
)}
            </div> 
            <img src={avatar} alt="avatar" className='w-[40px] h-[37px]'/>
        </div>
    </div>
  )
}

export default Navbar