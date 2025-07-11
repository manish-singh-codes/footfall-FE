import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Summary() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const res = await axios.get('http://localhost:5000/api/analytics');
      setSummary(res.data);
    };
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Today’s Summary</h2>
      {summary.map((item, idx) => (
        <div key={idx} className="mb-2">
          Sensor: {item.sensor_id} | Total Count: {item.total_count}
        </div>
      ))}
    </div>
  );
}
