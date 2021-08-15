import About from './Components/About'
import './App.css'
import { Router } from '@reach/router'
import Moviepoter from './Components/movieposter'
import Popularity from './Components/Popularity';
import Header from './Components/Header';
import Watch from './pages/watch/Watch';
function App() {
  return (
    <div className="App">
      <Header />
      <Router >
      <Popularity path="/" />
      <Watch  path="/movie/:id"/>
      <About  path="/about"/>
      </Router>
    </div>
  );
}

export default App;
