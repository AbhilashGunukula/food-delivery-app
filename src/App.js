import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route (AppLayout) */}
        <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
          {/* Child Routes */}
          <Route index element={<Body />} /> {/* Default child route for "/" */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurants/:resID" element={<RestaurantMenu />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
