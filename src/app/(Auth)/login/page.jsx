"use client";

import LoginImage from "../../../../public/assets/login.jpg";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    console.log(userData, "from login page");

    reset();
  };

  return (
    <div className="max-w-330 px-3 mx-auto mt-5">
      <div className="text-center">
        <h2 className="font-semibold text-2xl md:text-3xl">
          Welcome Back, Pet Lover!
        </h2>
        <p className="mt-2">
          Sign in to reconnect with adorable pets and continue making a
          difference through adoption.
        </p>
      </div>

      <div className="mt-8 border rounded-md overflow-hidden max-w-230 w-full mx-auto flex">
        <div className="flex-1 px-4 py-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                <p className="text-sm text-red-600">
                  {errors.password.message}
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
                Login
              </Button>
            </div>
          </form>

          <p className="text-center my-3">Or</p>

          <Button variant="outline" className={"w-full rounded-md"}>
            <FcGoogle /> Login With Google
          </Button>

          <div className="text-center mt-4">
            <p>
              If you do not have Account |{" "}
              <Link href={"/signup"} className="text-blue-600 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <div className="flex-1 hidden md:block">
          <Image
            src={LoginImage}
            alt="petImage"
            width={1000}
            height={800}
            className="max-h-110 h-full object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
