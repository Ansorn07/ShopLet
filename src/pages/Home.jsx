import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  async function fetchProductsData() {
    setLoading(true);
    try {
      const output = await fetch(API_URL);
      const data = await output.json();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f8] py-10 px-4">
      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <>
          <h1 className="text-4xl font-extrabold text-center text-black mb-10 tracking-tight">
            🔥 Featured Collection
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 text-xl font-medium">
          No Products Found
        </div>
      )}
    </div>
  );
};

export default Home;
