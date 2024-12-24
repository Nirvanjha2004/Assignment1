import { useState } from "react";

function CheckOutCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-4 lg:p-8 max-w-7xl mx-auto">
      {/* Left Section - Shipping Details */}
      <div className="w-full lg:w-2/3 space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold">Shipping Details</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">First Name</label>
              <input 
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            {/* Similar structure for other input fields */}
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Address</label>
            <textarea 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              rows="3"
            />
          </div>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full lg:w-1/3 bg-gray-50 p-4 md:p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img src="/product.jpg" alt="" className="w-20 h-20 object-cover rounded" />
            <div>
              <h3 className="font-medium">Product Name</h3>
              <p className="text-sm text-gray-600">Size: M | Color: Blue</p>
              <p className="text-sm font-medium">$99.00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>$99.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>$104.00</span>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckOutCard;
