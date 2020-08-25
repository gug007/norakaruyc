import React from "react";
import GoogleMapReact from "google-map-react";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";

const AnyReactComponent = ({ text }) => (
  <>
    <ApartmentOutlinedIcon color="primary" />
  </>
);

function Map({ buildings }) {
  const map = {
    center: {
      lat: buildings[0].y,
      lng: buildings[0].x,
    },
    zoom: 15,
  };
  return (
    <div style={{ height: "calc(100vh - 104px)", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC5_tWHM2Cmk-t01IAJ_ogEKezekJyGqhk" }}
        defaultCenter={map.center}
        defaultZoom={map.zoom}
      >
        {buildings.map((building, i) => (
          <AnyReactComponent
            lat={building.y}
            lng={building.x}
            text="My Marker"
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
