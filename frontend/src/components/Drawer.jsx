import React from "react";
import { LuX } from "react-icons/lu";

const Drawer = ({ isOpen, onClose, title, children }) => {
  return (
    <div
      className={`fixed top-[64px] right-0 z-40 h-[calc(100dvh-64px)] w-full md:w-[40vw] bg-white shadow-2xl shadow-cyan-800/10 border-l border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      role="dialog"
      aria-labelledby="drawer-right-label"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h5 id="drawer-right-label" className="text-base font-semibold text-black">
          {title}
        </h5>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Close drawer"
        >
          <LuX size={20} />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="p-4 overflow-y-auto max-h-[calc(100dvh-64px-48px)]">
        {children}
      </div>
    </div>
  );
};

export default Drawer;
