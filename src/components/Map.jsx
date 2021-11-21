import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvents,
  MapConsumer,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import "./leaflet.css";
import { icon } from "../context";
import MarkIcon from "../components/MarkIcon";
import fetchData from "../api/FetchData";

const mapSet = { height: "90vh", width: "100vw", zIndex: 0 };

const Map = (mapView) => {
  const {
    yubikeMark,
    yubikeFullMark,
    yubikeDisMark,
    bikeMark,
    restaurantMark,
    spotMark,
    pin,
    pinAlt,
    currentPoint,
    plus,
    minus,
  } = useContext(icon);

  //init

  const [currentLocation, setCurrentPoint] = useState({
    lat: mapView.lat || 25.03418,
    lng: mapView.lng || 121.564517,
    zoom: 15,
  });
  const [mapCenter, setMapCenter] = useState({
    lat: 25.03418,
    lng: 121.564517,
    zoom: 17,
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPoint({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  function MyComponent({ map }) {
    const [position, setPosition] = useState(map.getCenter());
    const goCurrent = useCallback(() => {
      getLocation();
      map.setView(currentLocation);
      setMapCenter(currentLocation);
    }, [map]);

    const onMove = useCallback(() => {
      setPosition(map.getCenter());
    }, [map]);

    useEffect(() => {
      map.on("move", onMove);
      return () => {
        map.off("move", onMove);
      };
    }, [map, onMove]);
    // console.log(position);
    const zoomIn = () => {
      setMapCenter({
        lat: position.lat,
        lng: position.lng,
        zoom: mapCenter.zoom > 20 ? mapCenter.zoom : mapCenter.zoom + 3,
      });
    };

    const zoomOut = () => {
      setMapCenter({
        lat: position.lat,
        lng: position.lng,
        zoom: mapCenter.zoom < 0 ? mapCenter.zoom : mapCenter.zoom - 3,
      });
    };

    return (
      <div className="relative">
        <div className="absolute top-0 right-0 translate-y-4 -translate-x-1/2 z-50 flex flex-col space-y-3">
          <button
            type="button"
            className="bg-white rounded-full shadow p-2"
            onClick={goCurrent}
          >
            <img
              className="w-8 h-8 lg:w-10 lg:h-10"
              src={currentPoint}
              alt="目前所在位置"
            />
          </button>
          <button
            type="button"
            className="bg-white rounded-full shadow p-2"
            onClick={zoomIn}
          >
            <img className="w-8 h-8 lg:w-10 lg:h-10" src={plus} alt="放大" />
          </button>
          <button
            type="button"
            className="bg-white rounded-full shadow p-2"
            onClick={zoomOut}
          >
            <img className="w-8 h-8 lg:w-10 lg:h-10" src={minus} alt="縮小" />
          </button>
        </div>
      </div>
    );
  }

  const [stationData, setStationData] = useState([]);

  const calculateStation = (stationCity, availability) => {
    let stationKey;
    let availabilityKey;
    const fullData = [];
    stationCity.forEach((station) => {
      stationKey = Object.keys(station);
    });
    availability.forEach((availability) => {
      availabilityKey = Object.keys(availability);
    });
    stationCity.forEach((station) => {
      availability.forEach((availability) => {
        if (station.StationID === availability.StationID) {
          fullData.push({
            ...station,
            ...availability,
          });
        }
      });
    });
    return fullData;
  };

  useEffect(async () => {
    const stationResult = await fetchData("Station", mapView.data);
    const availabilityResult = await fetchData("Availability", mapView.data);
    const result = calculateStation(
      stationResult.data,
      availabilityResult.data
    );
    setStationData(result);
  }, [mapView.data]);

  function MakerCreator({ resultData }) {
    console.log(resultData);
    return resultData.map((data) => (
      <MarkIcon
        key={data.StationID}
        position={[
          data.StationPosition.PositionLat,
          data.StationPosition.PositionLon,
        ]}
        src={
          data.ServiceStatus === 0
            ? yubikeDisMark
            : data.BikeStatus === 2
            ? yubikeFullMark
            : yubikeMark
        }
      >
        <Popup>
          <div class="p-3 space-y-2">
            <h3 class="text-lg">{data.StationName.Zh_tw}</h3>
            <div className="flex space-x-3">
              <img src={pinAlt} alt="" />
              <p class="text-gray-dark text-opacity-80">
                {data.StationAddress.Zh_tw}
              </p>
            </div>
            <div class="flex justify-center items-center gap-6 divide-x divide-gray-tr divide-solid">
              <div
                class={`${data.AvailableRentBikes === 0 ? "text-red":"text-secondary"} flex flex-col justify-center items-center w-1/2`}
              >
                <span class="block text-lg">{data.AvailableRentBikes}</span>
                <span class="block text-sm">可租借</span>
              </div>
              <div class={`${data.AvailableReturnBikes === 0 ?"text-red":"text-blue"} flex flex-col justify-center items-center w-1/2`}>
                <span class="block text-lg">{data.AvailableReturnBikes}</span>
                <span class="block text-sm">可歸還</span>
              </div>
            </div>
          </div>
        </Popup>
      </MarkIcon>
    ));
  }

  function MapComponent() {
    const [map, setMap] = useState(null);

    const currentIcon = new L.divIcon({
      html: `<div class="bg-transparent">
            <img class="h-10 w-10 text-red fill-current" src=${pin} alt="" />
          </div>`,
    });

    const displayMap = useMemo(() => {
      return (
        <MapContainer
          center={[mapCenter.lat, mapCenter.lng]}
          zoom={mapCenter.zoom === undefined ? 16 : mapCenter.zoom}
          style={mapSet}
          zoomControl={false}
          whenCreated={setMap}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            {MakerCreator({ resultData: stationData })}
          </MarkerClusterGroup>
          <Marker
            position={[currentLocation.lat, currentLocation.lng]}
            icon={currentIcon}
          >
            <Popup>
              <div className="marker-popup">
                <div className="marker-popup-title">目前所在位置</div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      );
    }, []);

    return (
      <div>
        {map ? <MyComponent map={map} /> : null}
        {displayMap}
      </div>
    );
  }

  return <MapComponent />;
};

export default Map;
