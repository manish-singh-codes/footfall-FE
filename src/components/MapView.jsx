import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView() {
  const sensors = [
    { id: 'sensor1', position: [28.6139, 77.2090] }, // Delhi (Example)
    { id: 'sensor2', position: [19.0760, 72.8777] }, // Mumbai (Example)
  ];

  return (
    <div className='max-w-5xl mx-auto p-6 rounded-2xl shadow-lg bg-white mt-8'>
      <h2 className="text-xl font-bold mb-4">Sensor Locations</h2>
      <MapContainer center={[23.2599, 77.4126]} zoom={5} style={{ height: "400px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sensors.map(sensor => (
          <Marker key={sensor.id} position={sensor.position}>
            <Popup>{sensor.id}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
