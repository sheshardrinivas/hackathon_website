"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 4000);
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <h2 className="text-6xl font-bold">404 Not Found</h2>

      <p className="text-2xl text-gray-600">Could not find requested page</p>
      <p className="text-2xl text-gray-600">
        You will be redirected to home page in 4 seconds
      </p>

      <Link
        href="/"
        className=" border border-gray-300 px-4 py-2 rounded-4xl hover:bg-gray-100 hover:text-neutral-900 transition-colors duration-500 "
      >
        Return Home page
      </Link>
    </div>
  );
}
