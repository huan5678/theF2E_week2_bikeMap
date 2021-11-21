import React from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";

function MarkIcon({ ...props }) {
  const iconSrc = new L.divIcon({
    html: `<div className="bg-transparent">
            <img className="" src=${props.src} alt="" />
          </div>`,
  });
  return (
    <Marker
      position={props.position}
      icon={iconSrc}
    >
      {props.children}
    </Marker>
  );
}

export default MarkIcon;
