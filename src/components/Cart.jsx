import { ShoppingCart } from "lucide-react";
import React from "react";

const Cart = ({ quantity }) => {
  return (
    <div className="drawer drawer-end z-50 ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="cursor-pointer drawer-button">
          <ShoppingCart className="text-gray-600" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <h1 className="text-center font-bold border-b py-2 text-2xl">
            Cart ({quantity})
          </h1>
          <div>
            {quantity === 0 ? (
              <p className="h-screen flex items-center justify-center">
                No content added to cart yet!
              </p>
            ) : (
              <div>Item1</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
