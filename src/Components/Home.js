import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1 className="font-sans text-5xl m-10">My Portfolio</h1>
      <div className="text-blue-500 border-2 border-solid grid grid-cols-4 gap-x-1 place-items-center ">
        <div>LINK 1</div>
        <div>LINK 2</div>
        <div>LINK 3</div>
        <div>
          <Link to="/my-portfolio/contact">Contact Me!</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
