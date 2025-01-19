"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear, faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
    <div className="m-20 flex flex-col justify-center items-center">
      <h1 className="m-5 font-bold text-5xl">Something Went Wrong!</h1>
      <h2 className="m-5 font-bold text-3xl">{error.message}</h2>
      {error.message ===
        "Cannot read properties of undefined (reading 'title')" && (
        <>
          <p>It's was a temporary state so it wont work!</p>
          <FontAwesomeIcon className="w-12 h-12" icon={faFaceSadTear} />{" "}
        </>
      )}

      <button
        className="m-5 bg-[#CBF1F5] hover:bg-[#A6E3E9] text-gray-800 font-bold py-2 px-4 rounded"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <Link href="/">
        <button className="mr-2 bg-[#CBF1F5] hover:bg-[#A6E3E9] text-gray-800 font-bold py-2 px-4 rounded">
          <FontAwesomeIcon icon={faHouse} />
          <span className="ml-2">Back To Homepage</span>
        </button>
      </Link>
    </div>
  );
}
