import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
type position = {
  lat?: number;
  lon?: number;
};
const Map = ({ lat = 30.4301, lon = -9.5912 }: position) => {
  const position = [lat, lon];
  return (
    <MapContainer
      center={[position[0], position[1]]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[position[0], position[1]]}
        icon={
          new Icon({
            iconUrl: "/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup className="translate-x-3">
          {position[0]}, {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
