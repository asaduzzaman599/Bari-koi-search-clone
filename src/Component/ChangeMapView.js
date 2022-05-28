import { useMap } from "react-leaflet";

function ChangeMapView({ position }) {
    const map = useMap();
    map.setView(position, map.getZoom());

    return null;
}

export default ChangeMapView