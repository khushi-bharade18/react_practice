import { useState } from "react";
import { Link} from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPass, setShowPass] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md m-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <form className="space-y-5" method="post" onClick={handleSubmit}>
        <div>
          <label
            for="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            User Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            for="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <label
            for="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="absolute right-2 top-[50%] text-xl cursor-pointer active:bg-gray-200 rounded-full p-1"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 mt-4 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 active:scale-95"
        >
          Register
        </button>
        <p className="block text-sm font-medium text-gray-700 text-center">
          Already have an account?
          <Link to={"/login"} className="hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
