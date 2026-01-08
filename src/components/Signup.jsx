import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div
        className="
          w-full
          max-w-md
          rounded-xl
          bg-white
          p-8
          sm:p-10
          shadow-lg
          border
          border-gray-200
        "
      >
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900">
          Create your account
        </h2>

        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="
              font-medium
              text-blue-600
              transition-colors
              duration-200
              hover:text-blue-700
            "
          >
            Sign in
          </Link>
        </p>

        {error && (
          <p className="mt-6 rounded-lg bg-red-50 px-4 py-2 text-center text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(create)} className="mt-6">
          <div className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              {...register("password", { required: true })}
            />

            <Button type="submit" className="w-full mt-2">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
