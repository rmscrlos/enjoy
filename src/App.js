import './App.css';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Speakers from './components/speakers/Speakers';
import Schedule from './components/schedule/Schedule';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Speakers />
      <Schedule />
      <Signup />
    </div>
  );
}

export default App;
