import React, { useEffect } from "react";
import Nav from "../Nav";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slice/productsSlice";
import { fetchCategories } from "../../store/slice/categorySlice";
import { ToastContainer } from "react-toastify";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <Nav />
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
