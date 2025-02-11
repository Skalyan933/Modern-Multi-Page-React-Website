import React, { useState } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import RootLayout from "./Layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import ProtectedRoute from "./components/ProtectedRoute"; 
import Products from "./pages/Products"; // Import Products page
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("authToken"); // Persist authentication
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Protected Products Route */}
        <Route path="products" element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route index element={<Products />} />
        </Route>

        <Route path="services" element={<Services />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpassword" element={<ForgetPassword />} />
      </Route>
      

    )
  );
  return <RouterProvider router={router} />;
};

export default App;
