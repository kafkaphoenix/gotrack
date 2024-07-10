import { MapContainer, TileLayer, ZoomControl, Marker, Popup, useMap } from "react-leaflet";
import { DivIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapView() {
    const lat = 2.32
    const lon = 4.67
    const position = [lat, lon];
    const zoomLevel = 4;

    const currentLocationMarker = new DivIcon({
        className: 'custom-marker-icon',
        html: `
        <div style="background-color: #d8cf1a; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 15px 5px rgba(230,236,73,0.98), 0 0 20px 10px rgba(227,232,93,0.98);">
            <div style="width: 100%; height: 100%; border: 1px solid white; border-radius: 50%; opacity: 0.5"></div>
        </div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, -10]
    });


    return (
        <MapContainer
            center={position}
            zoom={zoomLevel}
            scrollWheelZoom={true}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            />
            <Marker
                position={[lat, lon]}
                icon={currentLocationMarker}
            >
                <Popup>
                    <strong>Latitude:</strong> {lat}<br />
                    <strong>Longitude:</strong> {lon}<br />
                </Popup>
            </Marker>
            <ZoomControl position="topright" />
        </MapContainer>
    );
}

export default MapView;