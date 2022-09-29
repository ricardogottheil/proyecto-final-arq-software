import { Marker, Popup } from "react-leaflet";
import { bicycleIcon } from "../utils/icons";

export const BicycleMarker = ({
    position = [37.419857, -122.078827],
    popupText = "Bicicleta",
    enablePopup = false,
}) => {
    return (
        <Marker position={position} icon={bicycleIcon}>
            {enablePopup && <Popup>{popupText}</Popup>}
        </Marker>
    );
};
