import "./App.css"; 
import SearchForm from "./Components/SearchForm";
import StarRating from "./Components/StarRating";
import Header from "./Components/Header";
import Movieposter from "./Components/movieposter";
import Popularity from "./Components/Popularity";
import Featured from './Components/featured/Featured'
import About from './Components/About'
import { Router } from '@reach/router'
function App() {
  return (
    <div className="App">
      <Router >
      <About  path="about"/>
      </Router>
      <SearchForm />
      <Featured />
      <StarRating/>
      < Movieposter />
      <Popularity />
      <Header/>

    </div>
  );
}

export default App;
