import React, { useState ,useEffect} from "react";
import shoe1 from "../images/image-product-1.jpg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart.svg";
import product1 from "../images/image-product-1-thumbnail.jpg";
import product2 from "../images/image-product-2-thumbnail.jpg";
import product3 from "../images/image-product-3-thumbnail.jpg";
import product4 from "../images/image-product-4-thumbnail.jpg";

function Product({setCartQuantity}) {
  const [quantity, setQuantity] = useState(0);

  // useEffect(() => {
  //   if (quantity > 0) {
  //     setCartQuantity(quantity);
  //   }
  // }, [quantity]);
  return (
    <div className="flex mt-20 p-4 ml-60 gap-30">
      <div className="flex gap-10">
        <img
          src={shoe1}
          alt="shoe-1"
          className="w-[420px] h-[450px] rounded-xl"
        />
      </div>
      <div className="flex  flex-col mt-25 gap-3">
        <h2 className="uppercase font-bold text-[hsl(219,9%,45%)]">
          Sneaker Company
        </h2>
        <h1 className="text-black font-bold w-[560px] text-5xl  ">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-[hsl(219,9%,45%)] w-[450px] mt-7 gap-4 ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <span className="font-black text-2xl">
          $125.00{" "}
          <span className="bg-black text-white ml-6 p-1 text-lg">50%</span>
        </span>
        <span className="font-bold text-[hsl(219,9%,45%)] line-through">$250.00</span>

        <div className="flex gap-2">
          <div className="flex items-center justify-between bg-[hsl(220,20%,94%)] rounded-md w-24 h-8 px-2">
            <img
              src={minus}
              alt="minus"
              className="w-2 cursor-pointer"
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
            />

            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-8 ml-5"
            />

            <img
              src={plus}
              alt="plus"
              className="w-2 cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>

          <div className="relative flex ">
            <button   
             onClick={() => {
    if (quantity > 0) {
      setCartQuantity(quantity);   // send data to Navbar
    }
  }}
            className="bg-[hsl(26,100%,55%)] cursor-pointer font-black rounded-lg w-[220px] h-[37px] font-bold text-[14px] text-black">
              <img
                src={cart}
                alt="cart-icon"
                className="w-[32px]  h-[26px]  p-2 ml-10 absolute  "
              />
              Add to cart
            </button>
          </div>
        </div>
        <div className="ml-[-530px] flex cursor-pointer  gap-5">
          <img src={product1} alt="product1" className="w-22 h-20 rounded-lg" />
          <img src={product2} alt="product2" className="w-22 h-20 rounded-lg" />

          <img src={product3} alt="product3" className="w-22 h-20 rounded-lg" />

          <img src={product4} alt="product4" className="w-22 h-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Product;
