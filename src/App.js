import React from "react";
import "./index.css";
function App() {
  return (
    <div>
      <h1 className="font-sans text-5xl m-10">My Portfolio</h1>
      <div className="text-blue-500 border-2 border-dashed grid grid-cols-4 gap-x-1 place-items-center ">
        <div>LINK 1</div>
        <div>LINK 2</div>
        <div>LINK 3</div>
        <div>LINK 4</div>
      </div>
    </div>
  );
}

export default App;
