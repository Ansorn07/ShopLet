import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-gray-300 p-6 transition hover:shadow-md rounded-lg mx-4 my-4 bg-white">
      
      {/* Product Image */}
      <div className="w-full sm:w-1/4 flex justify-center">
        <img src={item.image} alt={item.title} className="h-32 object-contain" />
      </div>

      {/* Product Info */}
      <div className="w-full sm:w-3/4 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800 leading-snug">{item.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
        
        {/* Price and Remove Button */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-green-700">${item.price}</span>
          <button
            onClick={removeFromCart}
            className="p-2 bg-red-100 hover:bg-red-400 text-red-700 rounded-full transition-transform hover:scale-110"
            title="Remove item"
          >
            <AiFillDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
