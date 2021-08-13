import "./App.css"; 
import SearchForm from "./Components/SearchForm";
import StarRating from "./Components/StarRating";
import Header from "./Components/Header";
import Top5 from "./Components/Top5";



function App() {
  return (
    <div className="App">
      <StarRating/>
      <SearchForm />
      <Top5/>
      {/* <Header/> */}
    </div>
  );
}

export default App;
