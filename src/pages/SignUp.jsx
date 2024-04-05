import { SignUpBro } from "../assets/images";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
 
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
// import { signup, signupGoogle } from "./../redux/actions/auth";
import { signup, signupGoogle } from "../redux/actions/auth";
import { useState } from "react";

const InitState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sForm, setsForm] = useState(InitState);
  const handleChange = (e) =>
    setsForm({
      ...sForm,
      [e.target.name]: e.target.value,
    });
  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;

    dispatch(signupGoogle(accessToken, navigate));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (
      sForm.firstName !== "" &&
      sForm.lastName !== "" &&
      sForm.password !== "" &&
      sForm.confirmPassword !== "" &&
      sForm.email !== "" &&
      sForm.password === sForm.confirmPassword &&
      sForm.password.length >= 4
    ) {
      dispatch(signup(sForm, navigate));
    }
  }

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });
  return (
    <main>
      <Nav />
      <section className=" max-sm:padding-b pt-48  ">
        <div className="flex flex-1 flex-row max-xl:flex-col-reverse justify-center bg-loginCard max-xl:mx-4 ">
          <div className="  md:pl-48 ">
            <img src={SignUpBro} alt="LogIn Image" height={600} width={600} />
          </div>
          <div className=" flex flex-1 items-center  justify-center max-sm:mx-4 ">
            <div className="w-full  bg-green-100 bg-opacity-25 rounded-xl shadow-lg p-8 my-4 md:max-w-sm md:mx-auto ">
              <span className="block w-full text-center text-xl uppercase text-teal-800 font-bold mb-4 font-montserrat">
                Join Us
              </span>
              <form className="mb-4 " action="/" method="post">
                <div className="mb-4 md:w-full">
                  <label htmlFor="firstName" className="block text-xs mb-1 ">
                    First Name
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 md:w-full">
                  <label htmlFor="lastName" className="block text-xs mb-1 ">
                    Last Name
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 md:w-full">
                  <label htmlFor="email" className="block text-xs mb-1 ">
                    Email
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Username or Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6 md:w-full">
                  <label htmlFor="password" className="block text-xs mb-1">
                    Password
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6 md:w-full">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-xs mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                </div>
                <button
                  onClick={handleOnSubmit}
                  className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-1 rounded"
                >
                  Sign Up
                </button>
              </form>
              <a className="text-blue-700 text-center text-sm" href="/login">
                Forgot password?
              </a>

              <div className="mt-6 grid grid-cols-3 items-center   ">
                <hr className="border-white" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-white" />
              </div>

              <button
                onClick={() => login()}
                className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
              >
                <svg
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="25px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                Sign Up with Google
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
