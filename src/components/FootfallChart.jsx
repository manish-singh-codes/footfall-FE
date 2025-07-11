import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function FootfallChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      const res = await axios.get('http://localhost:5000/api/analytics');
      const labels = res.data.map(item => `Hour ${item.hour}`);
      const counts = res.data.map(item => item.total_count);
      setChartData({
        labels,
        datasets: [{
          label: 'Footfall',
          data: counts,
          borderColor: 'rgb(75, 192, 192)',
          fill: false
        }]
      });
    };
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Footfall (Past Hour)</h2>
      <Line data={chartData} />
    </div>
  );
}
