import React, { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";

const Products = ({ cartProducts, setCartProducts, activeTab, onTabChange }, ref) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/data/json.json") 
      .then((res) => {
        setProducts(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error(err);
        setProducts([]);
      });
  }, []);

  const addToCart = (product) => {
    setCartProducts((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId, productName) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== productId));
    toast.info(`${productName} removed from cart`);
  };

  const handleCheckout = () => {
    setCartProducts([]);
    toast.success("Checkout complete. Cart cleared!");
  };

  const total = cartProducts.reduce(
    (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
    0
  );

  return (
  <section ref={ref} className="py-14 sm:py-16 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-center">Premium Digital Tools</h2>
        <p className="text-[#627382] md:w-[42%] text-center">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 justify-center mt-5">
        <button
          onClick={() => onTabChange("products")}
          className={`px-3 py-1 rounded-full cursor-pointer text-sm sm:text-lg transition-all duration-300 ${
            activeTab === "products"
              ? "bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 text-white"
              : "hover:text-[#4F39F6]"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => onTabChange("cart")}
          className={`px-3 py-1 rounded-full cursor-pointer text-sm sm:text-lg transition-all duration-300 ${
            activeTab === "cart"
              ? "bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 text-white"
              : "hover:text-[#4F39F6]"
          }`}
        >
          Cart ({cartProducts.length})
        </button>
      </div>
      {activeTab === "products" ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              inCart={!!cartProducts.find((item) => item.id === product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 bg-white rounded-xl border border-gray-200 p-4 sm:p-6 md:w-[90%] lg:w-[85%] mx-auto">
          <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
          {cartProducts.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            <>
              <div className="space-y-3">
                {cartProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-100 rounded-lg px-4 py-3 gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-8 h-8 rounded object-cover"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          ${item.price} {item.quantity > 1 ? `x ${item.quantity}` : ""}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.name)}
                      className="text-[#FF2D8D] text-sm cursor-pointer hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                <span>Total</span>
                <span className="text-lg sm:text-xl font-bold text-gray-900">${total}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-4 w-full bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 text-white py-2 rounded-full cursor-pointer hover:scale-[1.01] transition-all duration-300"
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default forwardRef(Products);