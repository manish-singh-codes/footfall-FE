import FootfallChart from './components/FootfallChart';
import Summary from './components/Summary';
import DeviceStatus from './components/DeviceStatus';
import MapView from './components/MapView';

export default function App() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Mini Footfall Monitoring Dashboard</h1>
      <FootfallChart />
      <Summary />
      <DeviceStatus />
      <MapView />
    </div>
  );
}
