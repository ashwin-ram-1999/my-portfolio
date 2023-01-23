import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul className="flex">
        <li className="flex-1 mr-2">
          <Link to="/my-portfolio">
            <div className="text-center block border border-gray-200 rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
              Home
            </div>
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <div className="text-center block border border-gray-200 rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
            Nav Item
          </div>
        </li>
        <li className="text-center flex-1">
          <Link to="/my-portfolio/contact">
            <div className="text-center block border border-gray-200 rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
              Contact Me!
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
