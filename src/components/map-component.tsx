import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

/* eslint-disable-next-line import/no-unassigned-import */
import "./map-component.css";

const LeafletMap: React.FC = () => {
  const position: [number, number] = [60.20064, 24.903831];
  return (
    <Map className="map" center={position} zoom={13}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>Linnanmäen sirkuskoulu</Popup>
      </Marker>
    </Map>
  );
};

export default LeafletMap;
