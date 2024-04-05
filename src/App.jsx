import DoctorDetails from "./pages/Doctor";
import Home from "./pages/Home";

import LogIn from "./pages/LogIn";
import Dashnoard from "./pages/Dashboard";
import Services from "./pages/Services";
import {  Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { useEffect, useState } from "react";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import loaduser from "./redux/actions/auth";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = JSON.parse(localStorage.getItem("user_info_dap_v1")) 
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
      {/* <Provider store={store}>
        <BrowserRouter>
          <GoogleOAuthProvider
            clientId={`414186732077-31rbm6haqq4vetaegji4jssi0edbqlmo.apps.googleusercontent.com`}
          > */}
      <Routes>
        <Route path="/" element={<Home />} />
        {!isLoggedIn && <Route path="/login" element={<LogIn />} />}
        {!isLoggedIn && <Route path="/signup" element={<SignUp />} />}
        {isLoggedIn && <Route path="/user" element={<Dashnoard />} />}

        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctor" element={<DoctorDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} /> */}
      </Routes>
      {/* </GoogleOAuthProvider>
        </BrowserRouter>
      </Provider> */}
    </>
  );
}
export default App;
