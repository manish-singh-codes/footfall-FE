import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

export default function FootfallChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/analytics`);
        const labels = res.data.map(item => `Hour ${item.hour}`);
        const counts = res.data.map(item => item.total_count);
        setChartData({
          labels,
          datasets: [{
            label: 'Footfall Count',
            data: counts,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        });
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      }
    };
    fetchAnalytics();
  }, []);

  return (
    <div className="p-6 rounded-2xl shadow-lg bg-white max-w-5xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        📊 Footfall Analytics (Per Hour)
      </h2>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { display: true, position: 'top' },
            tooltip: { enabled: true }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Hour',
                color: '#666',
                font: { size: 14, weight: 'bold' }
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Footfall Count',
                color: '#666',
                font: { size: 14, weight: 'bold' }
              }
            }
          }
        }}
      />
    </div>
  );
}
