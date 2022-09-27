import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        });

        return () => map.off("locationfound");
    }, [map]);

    return position === null ? null : (
        <Marker position={position}>
            <Popup>Estas aqui</Popup>
        </Marker>
    );
}

export const LeafletMap = ({ children, height, width }) => {
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={15}
            scrollWheelZoom={true}
            style={{
                height: String(height) ?? "200px",
                width: String(width) ?? "100%",
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            {children}
        </MapContainer>
    );
};
