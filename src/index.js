//My method to destructuring

import React from "react";
import { createRoot } from "react-dom/client";
import cars from "./practice";

const [honda, tesla] = cars;
const teslaTopColour = cars[1].coloursByPopularity[0];
const hondaTopColour = cars[0].coloursByPopularity[0];
const teslaTopSpeed = cars[1].speedStats.topSpeed;
const hondaTopSpeed = cars[0].speedStats.topSpeed;

const root = createRoot(document.getElementById("root"));

root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);

//Alternative destructuring method
// import React from "react";
// import { createRoot } from "react-dom/client";
// import cars from "./practice";

// const [{ model: hondaModel, coloursByPopularity: hondaColours, speedStats: { topSpeed: hondaTopSpeed } },
//        { model: teslaModel, coloursByPopularity: teslaColours, speedStats: { topSpeed: teslaTopSpeed } }] = cars;

// const [hondaTopColour] = hondaColours;
// const [teslaTopColour] = teslaColours;

// const root = createRoot(document.getElementById("root"));

// root.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//       <th>Top Colour</th>
//     </tr>
//     <tr>
//       <td>{teslaModel}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{hondaModel}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>
// );
