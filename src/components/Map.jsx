import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const windowWidth = window.innerWidth;

const mapSet = { height: "100vh", width: `${windowWidth}px` };
const Map = ({ markerPosition })=> {
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [25.03418, 121.564517],
      zoom: 17,
      layers: [
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),
      ],
    });
  }, []);

  const markerRef = useRef(null);
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng(markerPosition);
    } else {
      markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
    }
  }, [markerPosition]);

  const greenIcon = new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // const marker = L.marker([25.03418, 121.564517], { icon: greenIcon }).addTo(
  //   mapRef.current
  // );

  // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

  // L.circle([25.03418, 121.564517], {
  //   color: "red",
  //   fillColor: "#f03",
  //   fillOpacity: 0.5,
  //   radius: 10,
  // }).addTo(mapRef.current);

  return <div id="map" style={mapSet} />;
}
export default Map;
