"use client";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const { data: session } = useSession();
  return (
    <header className="bg-slate-900 py-4 px-6 rounded-sm">
      <div className="navbar flex items-center justify-between">
        <h1 className="text-2xl">
          <Link href="/">Taskify</Link>
        </h1>
        <ul className="flex items-center space-between space-x-4">
          {session && (
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {session?.user?.image && (
            <>
              <Image
                className="cursor-pointer rounded-full"
                height={30}
                width={30}
                src={session.user.image}
                alt="profile pic"
              />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          )}
          {!session && <Link href="/dashboard/login">Sign In</Link>}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
