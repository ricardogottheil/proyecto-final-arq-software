import { LeafletMap } from "../components/leaflet-map";
// import { Marker, Popup } from "react-leaflet";

export const HomeView = () => {
    return (
        <div className="h-screen">
            <LeafletMap height="100%" width="100%">
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </LeafletMap>
        </div>
    );
};
