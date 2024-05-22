"use client";

import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const handleSignOut = () => {
    setAuth(null);
    router.push("/login");
  };
  return (
    <>
      {auth ? (
        <>
          <span>Hello, {auth?.name}</span>
          <span> | </span>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
};

export default SignInOut;
