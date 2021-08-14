import "./App.css"; 
import SearchForm from "./components/SearchForm";
import StarRating from "./components/StarRating";
import Header from "./components/Header";
import Top5 from "./components/Top5";
import Movieposter from "./components/movieposter";
import Popularity from "./components/Popularity";


function App() {
  return (
    <div className="App">
      <SearchForm />
      {/* <StarRating/> */}
      <Movieposter />
      {/* <Popularity />
       <Top5/> */}
    </div>
  );
}

export default App;
