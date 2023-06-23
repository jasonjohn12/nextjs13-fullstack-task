"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session]);
  return (
    <div className="border border-gray-400 rounded-md px-4 py-6 container mx-auto">
      <h1 className="text-2xl mb-24">Get Started</h1>
      <div className=" container mx-auto ">
        <button
          className=" w-sm border text-center border-gray-400 rounded-md px-4 py-6 container mx-auto"
          onClick={() => signIn("github")}
        >
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
