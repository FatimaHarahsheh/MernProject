import "./App.css"; 
import SearchForm from "./components/SearchForm";
import StarRating from "./components/StarRating";
import Header from "./components/Header";
import Top5 from "./components/Top5";
import Movieposter from "./components/movieposter";
import Popularity from "./components/Popularity";
import Featured from './components/featured/Featured'
import About from './components/About'
import { Router } from '@reach/router'
function App() {
  return (
    <div className="App">
      <Router >
      <About  path="about"/>
      </Router>
      <SearchForm />
      <Featured />
      {/* <StarRating/> */}
      <Movieposter />
      {/* <Popularity />
       <Top5/> */}
    </div>
  );
}

export default App;
