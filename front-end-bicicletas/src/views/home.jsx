import { BicycleMarker } from "../components/bicycle-marker";
import { LeafletMap } from "../components/leaflet-map";

export const HomeView = () => {
    return (
        <div className="h-screen">
            <LeafletMap height="100%" width="100%">
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                <BicycleMarker
                    position={[6.1772364138168525, -75.59085637799701]}
                />
            </LeafletMap>
        </div>
    );
};
