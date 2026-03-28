import React, { useState } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";
import product1 from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";
import menuIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-close.svg";

function Navbar({ cartQuantity, setCartQuantity }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="border-b border-gray-200 mx-auto max-w-[1200px]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
          {/* LEFT */}
          <div className="flex items-center gap-4 md:gap-10">
            <img
              src={menuIcon}
              className="w-5 md:hidden cursor-pointer"
              onClick={() => setShowMenu(true)}
            />

            <img src={logo} className="w-[120px] md:w-[140px]" />

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-8 text-gray-400 mt-6">
              {["Collections", "Men", "Women", "About", "Contact"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="cursor-pointer pb-6 border-b-2 border-transparent hover:border-orange-500 hover:text-black"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5 relative">
            {/* CART */}
            <div className="relative">
              <img
                src={cart}
                className="w-6 cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}
              />

              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full">
                  {cartQuantity}
                </span>
              )}
            </div>

            {/* CART DROPDOWN */}
            {cartOpen && (
              <div className="fixed inset-0 z-50 flex justify-center items-start pt-16 md:justify-end md:pt-24">
                <div
                  className="absolute inset-0 bg-black/50 md:hidden"
                  onClick={() => setCartOpen(false)}
                />

                <div className="relative w-[92%] max-w-[360px] md:w-[360px] bg-white rounded-xl shadow-2xl md:mr-10">
                  <h2 className="font-bold p-5">Cart</h2>
                  <hr />

                  {cartQuantity > 0 ? (
                    <div className="p-5">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                          <img src={product1} className="w-12 rounded-md" />
                          <div>
                            <p className="text-gray-400 text-sm">
                              Fall Limited Edition Sneakers
                            </p>
                            <p className="text-gray-400 text-sm">
                              $125 x {cartQuantity}{" "}
                              <span className="text-black font-bold">
                                ${125 * cartQuantity}
                              </span>
                            </p>
                          </div>
                        </div>

                        <img
                          src={deleteIcon}
                          className="w-4 cursor-pointer"
                          onClick={() => setCartQuantity(0)}
                        />
                      </div>

                      <button
                        onClick={() => setCartQuantity(0)}
                        className="bg-orange-500 w-full py-3 mt-6 rounded-lg text-white font-bold cursor-pointer"
                      >
                        Checkout
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[150px]">
                      <p className="text-gray-400">Your cart is empty.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* AVATAR */}
            <img
              src={avatar}
              className="w-9 md:w-10 rounded-full cursor-pointer border-2 border-transparent hover:border-orange-500"
            />
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 flex ${
          showMenu ? "visible" : "invisible"
        }`}
      >
        <div
          className={`w-[70%] max-w-[260px] bg-white p-6 transform transition ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            src={closeIcon}
            onClick={() => setShowMenu(false)}
            className="mb-8 cursor-pointer"
          />

          <div className="flex flex-col gap-6 font-bold text-lg">
            {["Collections", "Men", "Women", "About", "Contact"].map(
              (item, i) => (
                <span key={i}>{item}</span>
              )
            )}
          </div>
        </div>

        <div
          className="flex-1 bg-black/60"
          onClick={() => setShowMenu(false)}
        />
      </div>
    </>
  );
}

export default Navbar;
