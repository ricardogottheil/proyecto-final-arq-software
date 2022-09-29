import L from "leaflet";

import bicycleSvgFile from "../assets/bicycle.svg";

const bicycleSvg = L.Icon.extend({
    options: {
        iconUrl: bicycleSvgFile,
        iconRetinaUrl: bicycleSvgFile,
        iconSize: new L.Point(50, 95),
        className: "leaflet-bicycle-icon",
    },
});

export const bicycleIcon = new bicycleSvg();
