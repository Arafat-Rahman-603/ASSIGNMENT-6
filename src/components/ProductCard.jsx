import { FaCheck } from "react-icons/fa6";

const ProductCard = ({ product, onAddToCart, inCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 relative border border-gray-200">
      {product.tag && (
        <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
          ${product.tagType === "popular" ? "bg-purple-100 text-purple-600" : ""}
          ${product.tagType === "new" ? "bg-green-100 text-green-600" : ""}
          ${product.tagType === "best seller" ? "bg-orange-100 text-orange-600" : ""}
        `}>
          {product.tag}
        </span>
      )}
      <div className="w-12 h-12 flex items-center justify-center rounded-full border-gray-200 p-2 border mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className=" object-contain"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold">{product.name}</h3>
      <p className="text-gray-500 text-sm mt-2">{product.description}</p>
      <div className="mt-4 text-lg sm:text-xl font-bold">
        ${product.price}
        <span className="text-sm text-gray-500 font-normal">
          /{product.period === "one-time" ? "One-time" : product.period}
        </span>
      </div>
      <ul className="mt-4 space-y-2">
        {product.features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2"><FaCheck/></span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={() => !inCart && onAddToCart(product)}
        disabled={inCart}
        className={`mt-6 w-full py-2 rounded-full cursor-pointer transition-all duration-300 ${
          inCart
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-linear-to-r from-purple-500 to-indigo-500 text-white hover:scale-105 active:scale-95"
        }`}
      >
        {inCart ? "In Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard