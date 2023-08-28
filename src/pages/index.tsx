import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

import { api } from "~/utils/api";

export default function Home() {
  const user = useUser()
  const { data } =  api.posts.getAll.useQuery()

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </main>
    </>
  );
}
