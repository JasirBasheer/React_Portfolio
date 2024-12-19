import React from 'react';
import { LuSunMedium, LuMoon } from "react-icons/lu";
import { useTheme } from '../contexts/ThemeContext';

const SignGuestBook: React.FC = () => {
  const { themeMode, switchTheme } = useTheme();

  const toggleTheme = () => {
    switchTheme(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex sm:justify-end justify-between sm:gap-5 items-center sm:px-0 px-5 sm:py-0 py-6">
      <div 
        onClick={toggleTheme} 
        className="cursor-pointer border-none p-2 rounded-full"
        aria-label="Toggle theme"
      >
        {themeMode === 'light' ? (
          <LuSunMedium className="w-5 h-5 text-[rgb(148,163,184)]  dark:text-[rgb(148,163,184)] cursor-pointer" />
        ) : (
          <LuMoon className="w-5 h-5  text-[rgb(148,163,184)]  dark:text-[rgb(148,163,184)] cursor-pointer" />
        )}
      </div>
      <div className="bg-blue-500 py-[5px] cursor-pointer rounded-3xl text-[0.9rem] px-3 text-white">
        Sign my guestbook
      </div>
    </div>
  );
};

export default SignGuestBook;
