import "./App.css"; 
<<<<<<< HEAD
import SearchForm from "./Components/SearchForm";
import StarRating from "./Components/StarRating";
import Header from "./Components/Header";
import Top5 from "./Components/Top5";
import Movieposter from "./Components/movieposter";
import Popularity from "./Components/Popularity";
import Watch from "./pages/watch/Watch";
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      {/* <SearchForm /> */}
=======
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
>>>>>>> f6a2a7a5e511a8cdf52c7ca6d782ea579976c013
      {/* <StarRating/> */}
      {/* <Movieposter /> */}
      {/* <Popularity />
       <Top5/> */}
       <Router>
         <Watch path="/movie/:id" />
       </Router>
    </div>
  );
}

export default App;
