import "./App.css"; 
import SearchForm from "./Components/SearchForm";
import StarRating from "./Components/StarRating";
import Header from "./Components/Header";
import Top5 from "./Components/Top5";
import Movieposter from "./Components/movieposter";
import Popularity from "./Components/Popularity";


function App() {
  return (
    <div className="App">
      <StarRating/>
      {/* <SearchForm />
     
      {/* <Header/> */}
      <Movieposter />
      {/* <Popularity /> */}
       {/* <Top5/> */}
    </div>
  );
}

export default App;
