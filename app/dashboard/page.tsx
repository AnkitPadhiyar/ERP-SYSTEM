"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h2>
        <p className="mb-4">Logged in as: <b>{session?.user?.email || session?.user?.name}</b></p>
        <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={() => signOut({ callbackUrl: "/login" })}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
