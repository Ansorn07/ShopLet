import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <header className="w-full bg-black text-white shadow-md">
      {/* 🔝 Top Announcement Bar */}
      <div className="text-sm text-center bg-white text-black py-1 font-semibold">
        SOLVE YOUR QUERIES FASTER – CONNECT ON LINKEDIN •{" "}
        <a
          href="https://www.linkedin.com/in/a-s-babji-rao/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800"
        >
          CLICK HERE
        </a>
      </div>

      {/* 🌐 Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <NavLink to="/">
          <img src="/logo.png" className="h-14 w-36 object-contain" alt="Logo" />
        </NavLink>

        {/* Menu Links (all redirect to home) */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide">
          {["New", "Men", "Women", "Sale", "Kids", "Lifestyle"].map((label) => (
            <NavLink key={label} to="/" className="hover:text-red-500 transition">
              {label}
            </NavLink>
          ))}
        </div>

        {/* Cart Icon */}
        <div className="flex items-center gap-6">
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-red-600 transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
