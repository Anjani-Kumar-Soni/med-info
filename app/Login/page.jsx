"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="p-3 bg-white max-w-md w-full rounded-lg border border-t-2 border-primary">
        <h1 className="font-bold text-3xl my-4 text-center text-gray-600 uppercase">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="px-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password 
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-2 px-4 rounded"
            ></button>
            <div className="flex justify-center mt-5">
              <p className="text-gray-500">{"Don't"} have an account?</p>
              <Link
                href="/SignUp"
                className="ml-1 font-bold cursor-pointer text-blue-600"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
