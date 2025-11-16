"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./map.scss";

const Map = ({ mapData }) => {
  if (!mapData) {
    return (
      <div
        className="map__wrapper"
        style={{ height: "400px", background: "#eee" }}
      />
    );
  }

  const {
    latitude,
    longitude,
    popupText,
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
    <MapContainer center={positionMarker} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionMarker} icon={newIcon}>
        <Popup>
          <h2>{popupText}</h2>
          <br />
          <a
            className="map__link"
            href={`https://www.google.com/maps?q=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText}
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
