import './App.css';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Speakers from './components/speakers/Speakers';
import Schedule from './components/schedule/Schedule';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Speakers />
      <Schedule />
    </div>
  );
}

export default App;
