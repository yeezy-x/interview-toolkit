import React from 'react';

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
}) => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Header Content */}
      <div className="container mx-auto px-6 md:px-10">
        <div className="h-[200px] flex flex-col justify-center relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between">
            <div>
              <h2 className="text-2xl font-medium text-black animate-fade-slide-up">{role}</h2>
              <p className="text-sm text-gray-700 mt-1">{topicsToFocus}</p>
            </div>
          </div>

          {/* Info Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <div className="text-[11px] font-semibold text-white bg-black px-3 py-1 rounded-full animate-pop-in">
              Experience: {experience} {experience === 1 ? 'Year' : 'Years'}
            </div>

            <div className="text-[11px] font-semibold text-white bg-black px-3 py-1 rounded-full animate-pop-in">
              {questions} Q&A
            </div>

            <div className="text-[11px] font-semibold text-white bg-black px-3 py-1 rounded-full animate-pop-in">
              Last Updated: {lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* Blurred Blob Background */}
      <div className="absolute top-0 right-0 w-[50vw] md:w-[30vw] h-[200px] flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 bg-lime-400 blur-[65px] animate-blob1 hover:pulse-blob" />
        <div className="w-16 h-16 bg-lime-400 blur-[65px] animate-blob2 hover:pulse-blob" />
        <div className="w-16 h-16 bg-lime-300 blur-[45px] animate-blob3 hover:pulse-blob" />
        <div className="w-16 h-16 bg-fuchsia-200 blur-[45px] animate-blob1 hover:pulse-blob" />
      </div>
    </div>
  );
};

export default RoleInfoHeader;
