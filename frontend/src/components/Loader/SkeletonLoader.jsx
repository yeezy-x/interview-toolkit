import React from 'react';

const SkeletonBlock = ({ lines = 4 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, idx) => (
      <div
        key={idx}
        className={`h-3 bg-gray-200 rounded dark:bg-gray-700 w-${12 - idx}/12`}
      />
    ))}
  </div>
);

const SkeletonCard = () => (
  <div role="status" aria-label="Loading..." className="animate-pulse space-y-4 max-w-3xl">
    <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2"></div>
    <SkeletonBlock lines={4} />

    <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 space-y-2">
      <div className="h-2.5 bg-gray-300 rounded w-3/4"></div>
      <div className="h-2.5 bg-gray-300 rounded w-2/3"></div>
      <div className="h-2.5 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);

const SkeletonLoader = () => {
  return (
    <>
      <SkeletonCard />
      <div className="mt-10">
        <SkeletonCard />
        <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2 mt-8"></div>
        <SkeletonBlock lines={4} />
      </div>
    </>
  );
};

export default SkeletonLoader;
