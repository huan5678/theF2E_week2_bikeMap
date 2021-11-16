import React, { useState, useEffect, useRef } from "react";
import Map from "./components/Map";

function App() {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 49.8419,
    lng: 24.0315
  });
  const { lat, lng } = markerPosition;

  function moveMarker() {
    setMarkerPosition({
      lat: lat + 0.0001,
      lng: lng + 0.0001
    });
  }

  return <Map markerPosition={markerPosition} />;
}

export default App


