import React from "react";
import "./index.css";
function App() {
  return (
    <div>
      <table>
        <thead>
          <th>
            <tr>
              <td>LINK 1</td>
              <td>LINK 2</td>
              <td>LINK 3</td>
              <td>LINK 4</td>
            </tr>
          </th>
        </thead>
      </table>
      <h1>My Portfolio</h1>
      <button className="bg-red-500">Click me</button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-red-500 text-white rounded">Click me</button>
    </div>
  );
}

export default App;
