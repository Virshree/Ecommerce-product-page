import React, { useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart.svg";

import shoe1 from "../images/image-product-1.jpg";
import shoe2 from "../images/image-product-2.jpg";
import shoe3 from "../images/image-product-3.jpg";
import shoe4 from "../images/image-product-4.jpg";

import product1 from "../images/image-product-1-thumbnail.jpg";
import product2 from "../images/image-product-2-thumbnail.jpg";
import product3 from "../images/image-product-3-thumbnail.jpg";
import product4 from "../images/image-product-4-thumbnail.jpg";

import next from "../images/icon-next.svg";
import prev from "../images/icon-previous.svg";
import closeIcon from "../images/icon-close.svg";

function Product({ setCartQuantity }) {
  const [quantity, setQuantity] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const images = [shoe1, shoe2, shoe3, shoe4];
  const thumbnails = [product1, product2, product3, product4];

  return (
    <div className="max-w-[1200px] mx-auto  flex flex-col md:flex-row gap-10 md:mt-16 px-0 md:px-6">
      {/* LEFT SIDE (IMAGE) */}
      <div className="w-full md:w-1/2">
        {/* MAIN IMAGE */}
        <div className="relative ">
          <img
            src={images[selectedIndex]}
            onClick={() => setShowLightbox(true)}
            className="w-[450px] h-[330px] object-cover md:h-[450px] md:rounded-xl cursor-pointer"
          />
          {showLightbox && (
            <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
              {/* CLOSE BUTTON */}
              <img
                src={closeIcon}
                onClick={() => setShowLightbox(false)}
                className="absolute top-23 right-[34%] w-5 cursor-pointer hover:scale-110 hover:bg-orange-500"
              />

              {/* PREV BUTTON */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
                className="absolute left-[34.5%] top-[390px] -translate-y-1/2 cursor-pointer bg-white w-12 h-12 rounded-full flex items-center justify-center"
              >
                <img src={prev} className="w-3" />
              </button>

              {/* IMAGE */}
              <div className="flex flex-col items-center">
                <img
                  src={images[selectedIndex]}
                  className="w-[500px] h-[500px] rounded-xl"
                />

                {/* THUMBNAILS */}
                <div className="flex gap-8  mt-3  ">
                  {thumbnails.map((thumb, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`w-20 h-20 rounded-lg cursor-pointer overflow-hidden border-2
              ${
                selectedIndex === index
                  ? "border-orange-500"
                  : "border-transparent"
              }`}
                    >
                      <img
                        src={thumb}
                        className={`w-full h-full object-cover ${
                          selectedIndex === index ? "opacity-50" : ""
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* NEXT BUTTON */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-[34.5%] top-[390px] -translate-y-1/2 cursor-pointer bg-white w-12 h-12 rounded-full flex items-center justify-center"
              >
                <img src={next} className="w-3" />
              </button>
            </div>
          )}

          {/* MOBILE ARROWS */}
          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center md:hidden"
          >
            <img src={prev} className="w-3" />
          </button>

          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center md:hidden"
          >
            <img src={next} className="w-3" />
          </button>
        </div>

        {/* DESKTOP THUMBNAILS */}
        <div className="hidden md:flex gap-8 mt-4  ">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-20 h-20 rounded-lg cursor-pointer overflow-hidden border-2 transition
                ${
                  selectedIndex === index
                    ? "border-orange-500"
                    : "border-transparent hover:border-orange-300"
                }`}
            >
              <img
                src={thumb}
                className={`w-full h-full object-cover ${
                  selectedIndex === index ? "opacity-50" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (CONTENT) */}
      <div className="w-full md:w-1/2 flex flex-col gap-5 px-6 md:px-0 md:mt-15">
        <h2 className="uppercase text-gray-500 font-bold text-sm">
          Sneaker Company
        </h2>

        <h1 className="text-2xl md:text-5xl font-bold leading-tight">
          Fall Limited Edition Sneakers
        </h1>

        <p className="text-gray-500 text-sm w-[430px] md:text-base">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        {/* PRICE */}
        <div className="flex justify-between md:block">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">$125.00</span>
            <span className="bg-black text-white px-2 py-1 text-sm rounded">
              50%
            </span>
          </div>

          <span className="line-through text-gray-500 font-bold md:block">
            $250.00
          </span>
        </div>

        {/* CART SECTION */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* QUANTITY */}
          <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg md:w-40">
            <img
              src={minus}
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className="w-3 cursor-pointer"
            />
            <span>{quantity}</span>
            <img
              src={plus}
              onClick={() => setQuantity(quantity + 1)}
              className="w-3 cursor-pointer"
            />
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() => quantity > 0 && setCartQuantity(quantity)}
            className="bg-orange-500 w-full md:w-[250px] py-3 rounded-lg font-bold flex items-center justify-center gap-3"
          >
            <img src={cart} className="w-5" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
