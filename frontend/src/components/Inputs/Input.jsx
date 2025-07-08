import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4 w-full">
      {label && <label className="block mb-1 text-sm font-medium text-slate-800">{label}</label>}

      <div className="relative flex items-center border px-3 py-2 rounded-md bg-white shadow-sm focus-within:ring-2 focus-within:ring-amber-400">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-sm"
          value={value}
          onChange={onChange}
        />

        {type === "password" && (
          <div
            className="absolute right-3 cursor-pointer text-gray-500 hover:text-amber-500"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
