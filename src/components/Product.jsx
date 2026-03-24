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

import closeIcon from "../images/icon-close.svg";
import next from "../images/icon-next.svg";
import prev from "../images/icon-previous.svg";

function Product({ setCartQuantity }) {
  const [quantity, setQuantity] = useState(0);

  const [mainImage, setMainImage] = useState(shoe1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const bigImages = [shoe1, shoe2, shoe3, shoe4];
  const thumbnails = [product1, product2, product3, product4];
  return (
    <div className="flex mt-20 p-4 ml-60 gap-30">
      <div className="flex gap-10">
        <img
          src={mainImage}
          alt="shoe-1"
          onClick={() => setShowLightbox(true)}
          className="w-[420px] h-[450px] rounded-xl"
        />
      </div>
      {showLightbox && (
        <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-50">
          {/* Close button */}
          <img
            src={closeIcon}
            alt="close-btn"
            onClick={() => setShowLightbox(false)}
            className="absolute top-25 right-152 hover:bg-orange-400 cursor-pointer "
          />

          {/* Previous button */}
          <img
            src={prev}
            alt="prevIcon"
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === 0 ? bigImages.length - 1 : prev - 1
              )
            }
            className="absolute left-148 top-90 bg-white rounded-full w-12 h-12 p-4 cursor-pointer
    "
          />

          {/* Image */}
          <img
            src={bigImages[selectedIndex]}
            className="w-[500px] h-[500px] rounded-xl"
          />

          {/* Next button */}
          <img
            src={next}
            alt="next-icon"
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === bigImages.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-148 top-90 bg-white rounded-full w-12 h-12 p-4  cursor-pointer"
          />
          <div className="flex mt-5 gap-5">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                onClick={() => {
                  setMainImage(bigImages[index]);
                  setSelectedIndex(index);
                }}
                className={`rounded-lg w-22 h-20 cursor-pointer  transition-all duration-200
        ${
          selectedIndex === index
            ? "border-2 border-orange-500 bg-gray-200"
            : "hover:bg-gray-200 hover:border-2 hover:border-orange-500"
        }`}
              >
                <img
                  src={thumb}
                  className={`w-full h-full object-cover rounded-lg ${
                    selectedIndex === index ? "opacity-50" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        
      )}
      
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
        <span className="font-bold text-[hsl(219,9%,45%)] line-through">
          $250.00
        </span>

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
                  setCartQuantity(quantity); // send data to Navbar
                }
              }}
              className="bg-[hsl(26,100%,55%)] cursor-pointer font-black rounded-lg w-[220px] h-[37px] font-bold text-[14px] text-black"
            >
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
          <div className="flex gap-5">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                onClick={() => {
                  setMainImage(bigImages[index]);
                  setSelectedIndex(index);
                }}
                className={`rounded-lg w-22 h-20 cursor-pointer  transition-all duration-200
        ${
          selectedIndex === index
            ? "border-2 border-orange-500 bg-gray-200"
            : "hover:bg-gray-200 hover:border-2 hover:border-orange-500"
        }`}
              >
                <img
                  src={thumb}
                  className={`w-full h-full object-cover rounded-lg ${
                    selectedIndex === index ? "opacity-50" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
