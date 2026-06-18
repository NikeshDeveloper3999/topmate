import React from "react";
import { useNavigate } from "react-router-dom";

const NoServiceCategoryFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#E9E6DE] flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-[#6F695D] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          Not the expert you were looking for.
        </h1>

        <p className="mt-4 text-[#6F695D] text-base sm:text-lg">
          But don't worry — you're one click away from discovering the right one.
        </p>

        <button
          onClick={() => navigate("/search")}
          className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
        >
          Discover Top Experts
        </button>
      </div>
    </div>
  );
};

export default NoServiceCategoryFound;