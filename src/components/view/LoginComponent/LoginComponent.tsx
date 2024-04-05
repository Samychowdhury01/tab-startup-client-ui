"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import getUrl from "@/utils/getUrl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const url = getUrl()
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      const res = await fetch(
        `${url}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const resData = await res.json();
      console.log(resData);
      if (resData?.success) {
        Swal.fire({
          title: "Login Successful",
          text: resData?.message,
          icon: "success",
        });
        console.log(resData);
        localStorage.setItem("token", resData?.data);
        router.push("/dashboard");
      } else {
        setErrorMessage(resData?.message || "Something went wrong!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white w-full lg:w-[496px] p-5 md:p-10 rounded-md shadow-2xl">
      <h2 className="text-2xl font-semibold text-center mb-5">Welcome Back</h2>

      {/* form */}
      <form className=" space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            {...register("email", { required: true })}
            name="email"
            id="email"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        {/* password */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: true,
              })}
              name="password"
              placeholder="Password"
            />
            <span className="absolute top-3 right-3 cursor-pointer">
              {showPassword ? (
                <FaEye
                  size={18}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  size={18}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </span>
          </div>
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
        </div>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <Button className="w-full" variant="primary" type="submit">
          Login
        </Button>
      </form>
      <p className="text-center text-neutral-700 mt-5">
        New here?
        <Link href="/sign-up" className="text-[#00BDD6FF]">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginComponent;
