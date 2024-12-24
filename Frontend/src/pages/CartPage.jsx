import React from "react";
import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Shopping Cart</h1>

        {/* Cart Content */}
        <div className="flex flex-col space-y-6">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow-sm">
            <CartCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CartPage;
