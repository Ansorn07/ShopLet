import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans antialiased">
      {/* Header */}
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="pt-4 pb-10 px-4 sm:px-8 lg:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
