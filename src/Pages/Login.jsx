import { useState } from "react";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { RxSpaceEvenlyVertically } from "react-icons/rx";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleSubmitForm(data) {
    console.log(data);
  }
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md m-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form
        className="space-y-5"
        method="post"
        onClick={handleSubmit(handleSubmitForm)}
      >
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
            {...register("username", { required: "enter name" })}
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <span className="text-red-600 text-xs">User name is required</span>
          )}
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
            {...register("password", { required: "enter password" })}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="absolute right-2 top-[50%] text-xl cursor-pointer active:bg-gray-200 rounded-full p-1 transition"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 mt-4 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 active:scale-95"
        >
          Login
        </button>
        <p className="block text-sm font-medium text-gray-700 text-center">
          Don't have an account?
          <Link to={"/register"} className="hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
