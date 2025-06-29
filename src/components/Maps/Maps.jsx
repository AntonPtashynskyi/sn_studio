"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places"],
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const position = {
        lat: 51.07601158716394,
        lng: 17.03834648611571,
      };

      const mapOptions = {
        center: position,
        zoom: 15,
        mapId: "In_brows",
      };

      const map = new Map(mapRef.current, mapOptions);
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "In Brows",
      });
    };

    initMap();
  }, [address]);

  return (
    <div className="h-96 rounded-[3rem] w-full md:flex-[3]" ref={mapRef} />
  );
}
export default Map;
