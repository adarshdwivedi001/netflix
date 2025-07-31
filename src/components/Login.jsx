import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      <Header />
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen ">
        <form className="bg-black/60 p-8 rounded-lg w-full max-w-md  ">
          <h2 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <>
              <input
                type="number"
                placeholder="Mobile Number"
                className="w-full p-3 mb-4 rounded bg-gray-700 placeholder-gray-300 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Confirm Mobile Number"
                className="w-full p-3 mb-4 rounded bg-gray-700 placeholder-gray-300 focus:outline-none"
              />
            </>
          )}

          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 rounded bg-gray-700 placeholder-gray-300 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-gray-700 placeholder-gray-300 focus:outline-none"
          />
          <button className="w-full bg-red-600 hover:bg-red-700 transition-colors p-3 rounded font-semibold">
            Sign In
          </button>
          <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
            {isSignInForm && (
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
            )}
            <p href="#" className="hover:underline">
              Need help?
            </p>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            {isSignInForm ? "New to Netflix" : "Already have an account?"}
            <span
              className="text-white  hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? " Sign up now" : " Sign in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
