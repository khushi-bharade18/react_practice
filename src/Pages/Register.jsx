import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import EyeButton from "../Components/EyeButton";
import SubmitButton from "../Components/SubmitButton";

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleFormSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md m-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <form
        className="space-y-5"
        method="post"
        onSubmit={handleSubmit(handleFormSubmit)}
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
                message: "User name is required",
              },
              minLength: {
                value: 2,
                message: "Minimun length should be 2 letters",
              },
              maxLength: {
                value: 15,
                message: "Maximum length should be 2 letters",
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
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter valid email address",
              },
            })}
            placeholder="Enter your email"
            className={
              errors.email
                ? "border-red-500 border w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                : "border w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            }
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
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
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[0-9]).+$/,
                message: "Must contain 1 uppercase and 1 number",
              },
            })}
            placeholder="Enter your password"
            className={
              errors.password
                ? "border-red-500 border w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                : "border w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            }
          />
          <EyeButton showPass={showPass} setShowPass={setShowPass} />
          <span
            className={
              errors.password ? "text-red-500 text-xs" : "text-xs text-gray-700"
            }
          >
            Must contain 1 uppercase and 1 number
          </span>
        </div>
        <SubmitButton />
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
