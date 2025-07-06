import React from 'react';

const SpinnerLoader = () => {
  return (
    <div role="status" className="flex justify-center items-center">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="10"
          className="opacity-25"
        />
        <path
          fill="currentFill"
          d="M50 5a45 45 0 0 1 0 90V85a40 40 0 0 0 0-80V5z"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoader;
