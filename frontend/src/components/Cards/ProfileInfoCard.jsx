import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    clearUser();
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="flex items-center gap-3">
      <img
        src={user.profileImageUrl || '/default-avatar.png'}
        alt="Profile"
        className="w-11 h-11 object-cover bg-gray-300 rounded-full"
      />
      <div>
        <div className="text-[15px] text-black font-bold leading-5">
          {user.name || 'Anonymous'}
        </div>
        <button
          className="text-amber-600 text-sm font-semibold cursor-pointer hover:underline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
