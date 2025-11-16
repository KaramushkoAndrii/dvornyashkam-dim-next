"use client";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // import "leaflet/dist/leaflet.css";
// import "./map.scss";
// import L from "leaflet";
// import { useState } from "react";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "/leaflet/marker-icon-2x.png",
//   iconUrl: "/leaflet/marker-icon.png",
//   shadowUrl: "/leaflet/marker-shadow.png",
// });

// const Map = ({ position }) => {
//   return (
//     <div className="map__wrapper">
//       <MapContainer
//         center={position}
//         zoom={17}
//         style={{ width: "100vw", height: "100vh" }}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           // Открытый источник карт
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>"ПРиют находится здесь"</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;`

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./map.scss";

const Map = ({ mapData }) => {
  const {
    latitude,
    longitude,
    popupText,
    googleMapsLink,
    markerIcon,
    markerHeight,
    markerWidth,
    linkText,
  } = mapData;

  const markerSize = [markerWidth, markerHeight];
  const newIcon = new Icon({
    iconUrl: markerIcon.url,
    iconSize: markerSize,
  });

  const positionMarker = [latitude, longitude];
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionMarker} icon={newIcon}>
        <Popup>
          <h2>{popupText}</h2>
          <br />
          <a href={googleMapsLink}>{linkText}</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
