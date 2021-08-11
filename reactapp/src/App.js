import "./App.css"; 
import {Router} from "@reach/router"
import List from "./Components/list/List"
import ListItem from "./Components/listItem/ListItem"
import Featured from "./Components/featured/Featured"
import Header from "./Components/Header"
import StarRating from "./Components/StarRating"


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
   <List path="/list" />
   <ListItem path="/listitem" />
   <Featured path="/featured"/>
   <StarRating path="/StarRating"/>
   </Router>
    </div>
  );
}

export default App;
