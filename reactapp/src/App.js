import "./App.css"; 
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
