import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Icon from '../assets/icon.png';
import IconName from '../assets/icon-name.webp';
import Links from '../jsons/json.paths';

const NavigationBar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const toggleNav = () => setNavVisible((prev) => !prev);

  return (
    <nav className="sticky top-0 w-full z-50 bg-gradient-to-r from-gray-800 to-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NavLink to={'/'}>

        <h1 className="text-lg font-[Shafarik] text-yellow-400 flex gap-2 font-semibold uppercase tracking-[-0.09rem]">
        <img src={Icon} alt="Icon" className="size-10" />  
        <img src={IconName} alt="Icon Name" className="h-6 mt-2" />  
        </h1>
        
      </NavLink>

        <button
          onClick={toggleNav}
          className="inline-flex items-center p-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden transition-all duration-300 hover:bg-gray-200"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            className="w-full h-full"
          >
            <path
              stroke="currentColor"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <ul className={`font-medium md:flex md:space-x-8 rtl:space-x-reverse ${isNavVisible ? 'block' : 'hidden'} w-full md:w-auto md:block`}>
          {Links.paths.map((path, index) => (
            <li key={index}>
              <NavLink
                to={path.link}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm mt-3 sm:mt-0 md:p-0 transition-all duration-300 ${
                    isActive
                      ? "bg-blue-700 text-white md:bg-transparent md:text-yellow-400"
                      : "text-gray-300 md:text-gray-300 hover:text-yellow-500"
                  }`
                }
              >
                {path.linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
