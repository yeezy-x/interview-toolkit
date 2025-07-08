import React, { useEffect, useRef, useState } from 'react';
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from 'react-icons/lu';
import AIResponsePreview from '../../pages/InterviewPrep/components/components/AIResponsePreview';

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight + 10);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  return (
    <div className="bg-white rounded-lg mb-4 overflow-hidden py-4 px-5 shadow-xl shadow-gray-100/70 border border-gray-100/60 group">
      {/* Question Header */}
      <div className="flex justify-between items-start cursor-pointer" onClick={() => setIsExpanded(prev => !prev)}>
      {/* <div className="flex items-start">
        <span className="text-xs md:text-[15px] font-semibold text-gray-400 leading-[18px] mt-1">Q</span>
      </div> */} 
        <h3 className="text-gray-800 font-medium hover:underline mt-0.5 flex-1 text-left">
          {question}
        </h3>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end mt-2">
        <div className={`flex items-center gap-2 ${isExpanded ? 'md:flex' : 'md:hidden group-hover:flex'}`}>
          <button
            className="flex items-center gap-2 text-xs text-indigo-800 font-medium bg-indigo-50 px-3 py-1 rounded border border-indigo-50 hover:border-indigo-200"
            onClick={(e) => {
              e.stopPropagation();
              onTogglePin();
            }}
          >
            {isPinned ? <LuPinOff size={14} /> : <LuPin size={14} />}
          </button>

          <button
            className="flex items-center gap-2 text-xs text-cyan-800 font-medium bg-cyan-50 px-3 py-1 rounded border border-cyan-50 hover:border-cyan-200"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
              onLearnMore();
            }}
          >
            <LuSparkles size={14} />
            <span className="hidden md:block">Learn More</span>
          </button>

          <button
            className="text-gray-400 hover:text-gray-500"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(prev => !prev);
            }}
          >
            <LuChevronDown
              size={20}
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Answer Content */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <div ref={contentRef} className="mt-4 text-gray-700 bg-gray-50 px-5 py-3 rounded-lg">
          <AIResponsePreview content={answer} />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
