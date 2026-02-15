import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import EyeButton from "../Components/EyeButton";
import SubmitButton from "../Components/SubmitButton";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleSubmitForm(data) {
    console.log(data);
    reset();
  }
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md m-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form
        className="space-y-5"
        method="post"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            User Name
          </label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 2,
                message: "Must have 2 letters",
              },
            })}
            placeholder="Enter your username"
            className={
              errors.username
                ? "border-red-500 border w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                : "border w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            }
          />
          {errors.username && (
            <span className="text-red-500 text-xs">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <EyeButton showPass={showPass} setShowPass={setShowPass}/>
          <span
            className={
              errors.password ? "text-red-500 text-xs" : "text-xs text-gray-700"
            }
          >
            Password must be correct
          </span>
        </div>
        <SubmitButton/>
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
