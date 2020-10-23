import './App.css';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Speakers from './components/speakers/Speakers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Speakers />
    </div>
  );
}

export default App;
