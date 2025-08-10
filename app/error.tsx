"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h2 className="text-6xl text-red-400 font-bold">{error.message}</h2>
      <button
        onClick={() => reset()}
        className="border border-gray-300 px-4 py-2 rounded-4xl hover:bg-gray-100 hover:text-neutral-900 transition-colors duration-500"
      >
        Try again
      </button>
    </div>
  );
}
