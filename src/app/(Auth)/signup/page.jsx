"use client";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      photoURL: data.photoURL,
      password: data.password,
      rememberPassword: data.rememberPassword,
    };

    console.log(userData, "from signup page remove co pa");

    reset();
  };

  return (
    <div className="max-w-330 px-3 mx-auto mt-5">
      <div className="text-center">
        <h2 className="font-semibold text-2xl md:text-3xl">
          Join the Pet Adoption Community
        </h2>
        <p className="mt-2">
          Become a part of a trusted platform where pets and loving families
          come together.
        </p>
      </div>

      <div className="mt-8 border rounded-md p-4 max-w-130 w-full mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
          {/* name */}
          <div>
            <label className="font-medium text-lg block">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-1.5 py-1 border rounded-md w-full"
              {...register("name", { required: "Name is required." })}
            />

            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* email */}
          <div>
            <label className="font-medium text-lg block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-1.5 py-1 border rounded-md w-full"
              {...register("email", { required: "Email is required." })}
            />

            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* photo url */}
          <div>
            <label className="font-medium text-lg block">Photo URL</label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="px-1.5 py-1 border rounded-md w-full"
              {...register("photoURL")}
            />
          </div>

          {/* password */}
          <div>
            <label className="font-medium text-lg block">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className=" px-1.5 py-1 border rounded-md w-full"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                    message:
                      "Password must contain one uppercase and one lowercase letter.",
                  },
                })}
              />

              {/* eye of or on */}
              <button
                className="absolute top-[50%] translate-y-[-50%] right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye></Eye> : <EyeSlash></EyeSlash>}
              </button>
            </div>

            {errors.password && (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* conform password */}
          <div>
            <label className="font-medium text-lg block">
              Conform password
            </label>

            <div className="relative">
              <input
                type={showConformPassword ? "text" : "password"}
                placeholder="Conform password"
                className=" px-1.5 py-1 border rounded-md w-full"
                {...register("conformPassword", {
                  required: "Conform password is required.",
                  validate: (value) =>
                    value === password || "Password do not match.",
                })}
              />

              {/* eye of or on */}
              <button
                className="absolute top-[50%] translate-y-[-50%] right-2"
                onClick={() => setShowConformPassword(!showConformPassword)}
              >
                {showConformPassword ? <Eye></Eye> : <EyeSlash></EyeSlash>}
              </button>
            </div>

            {errors.conformPassword && (
              <p className="text-sm text-red-600">
                {errors.conformPassword.message}
              </p>
            )}
          </div>

          {/* remember check box */}
          <div>
            <input
              type="checkbox"
              id="rememberPassword"
              {...register("rememberPassword")}
            />
            <label htmlFor="rememberPassword" className="ml-1">
              Remember password
            </label>
          </div>

          {/* submit */}
          <div>
            <Button
              type="submit"
              className="w-full bg-[#ED8262] text-white rounded-md"
            >
              Sign Up
            </Button>
          </div>
        </form>

        <p className="text-center my-3">Or</p>

        <Button variant="outline" className={"w-full rounded-md"}>
          <FcGoogle /> Signup With Google
        </Button>

        <div className="text-center mt-4">
          <p>
            If you have already Account |{" "}
            <Link href={"/login"} className="text-blue-600 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
