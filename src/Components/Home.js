import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout/Layout";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div className="flex align-center justify-between">
        <h1 className="font-sans text-5xl m-10">My Portfolio</h1>
        <label
          htmlFor="toggleB"
          className="flex items-center cursor-pointer mr-5"
        >
          <div className="relative">
            <input
              type="checkbox"
              value={darkMode}
              onChange={() => {
                console.log(darkMode);
                setDarkMode(!darkMode);
              }}
              id="toggleB"
              className="sr-only"
            />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <div className="ml-3 text-gray-700 text-xs">
            Toggle for
            {darkMode ? <div> Light Mode</div> : <div> Dark Mode</div>}
          </div>
        </label>
      </div>
      <Layout>SAMPLE TEXT</Layout>
    </div>
  );
}

export default Home;
