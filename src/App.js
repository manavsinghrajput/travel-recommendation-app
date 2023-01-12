import "./styles.css";
import React, { useState } from "react";
const locationData = {
  Trekking: [
    { place: "Chadar trek in Ladakh", rating: "5/5" },
    { place: "Kedarkantha Trek in Uttarakhand", rating: "5/5" }
  ],
  "Fun Activities": [
    { place: "Haridwar in Uttarakhand", rating: "4/5" },
    { place: "Bir biling in Himachal Pradesh", rating: "4.5/5" }
  ],
  Offbeat: [
    { place: "leh-ladakh bike trip", rating: "5/5" },
    { place: "Rann utsav in Rann of Kutch", rating: "3.5/5" }
  ]
};
// const locationDataArr = Object.keys(locationData); //object to array conversion for .map() to read
// console.log(locArrDb);
export default function App() {
  const [selectedLocation, setselectedLocation] = useState("Offbeat");

  function onLocClickHandler(location) {
    // var loc = locationData[location]
    // console.log("clicked", selectedLocation);
    setselectedLocation(location);
  }
  return (
    <div className="App">
      <h1>
        <span className="material-symbols-outlined">travel_explore</span>travel
        recommendation app
      </h1>
      <p>
        Checkout my travel list I recommend visiting, select your mood and hop
        out
      </p>{" "}
      <div>
        {Object.keys(locationData).map((location, index) => {
          return (
            <button key={index} onClick={() => onLocClickHandler(location)}>
              {location}
            </button>
          );
        })}
        <hr />
      </div>
      <div>
        {
          // used for debugging-console.log("from :", locationData[selectedLocation])
          locationData[selectedLocation].map((name) => (
            <ul key={name.place}>
              <li className="list_place">{name.place}</li>
              <li className="list_rating">{name.rating}</li>
            </ul>
          ))
        }
      </div>
    </div>
  );
}
