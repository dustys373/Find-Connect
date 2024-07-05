import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';

const MapView = () => {
  const emergencyEvents = useSelector((state) => state.emergencyEvents.events);
  const [mapCenter, setMapCenter] = useState([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMapCenter([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        setMapCenter([40.7128, -74.0060]); // Default to New York City
      }
    );
  }, []);

  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {emergencyEvents.map((event) => (
        <Marker key={event.id} position={[event.latitude, event.longitude]}>
          <Popup>{event.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;