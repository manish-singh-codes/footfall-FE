import axios from 'axios';
import { useEffect, useState } from 'react';

export default function DeviceStatus() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/devices`);
      setDevices(res.data);
    };
    fetchDevices();
  }, []);

  return (
    <div className='max-w-5xl mx-auto p-6 rounded-2xl shadow-lg bg-white mt-8'>
      <h2 className="text-xl font-bold mb-4">Device Status</h2>
      {devices.map((device, idx) => (
        <div key={idx} className={`mb-2 p-2 border ${device.status === 'active' ? 'border-green-500' : 'border-red-500'}`}>
          {device.sensor_id} - {device.status} (Last Seen: {new Date(device.last_seen).toLocaleTimeString()})
        </div>
      ))}
    </div>
  );
}
