import React, { useState, useEffect } from "react";
import "../pages/styles/Products.css"; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minStars, setMinStars] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter products based on search, category, price, and rating
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? product.category === category : true) &&
      (maxPrice ? product.price <= parseFloat(maxPrice) : true) &&
      (minStars ? product.rating.rate >= parseFloat(minStars) : true)
    );
  });

  return (
    <div className="products-page">
      {/* Search & Filter Section */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <select onChange={(e) => setMinStars(e.target.value)} value={minStars}>
          <option value="">Min Rating</option>
          <option value="1">1 Star & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="4">4 Stars & Up</option>
        </select>
      </div>

      {/* Show loading or error messages */}
      {loading && <p className="loading">Loading products...</p>}
      {error && <p className="error">{error}</p>}

      {/* Products List */}
      {!loading && !error && (
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
                
                {/* Buttons */}
                <div className="product-buttons">
                  <button className="buy-btn">Buy Now</button>
                  <button className="cart-btn">Add to Cart</button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
