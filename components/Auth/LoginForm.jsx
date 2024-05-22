"use client";

import { performLogin } from "@/actions";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

// client component to server action

const LoginForm = () => {
  const [error, setError] = useState("");
  const { setAuth } = useAuth();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);
      if (found) {
        setAuth(found);
        router.push("/");
      } else {
        setError("Please Provide valid email and password.");
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <div className="text-red-500">
        <p>{error}</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
