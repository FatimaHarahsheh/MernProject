import "./App.css"; 
import { Router } from "@reach/router";
import Home from './views/Home'
import AddAuthor from './views/AddAuthor'
import Update from "./views/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Home path="/" />
        <AddAuthor path="/new" />
        <Update path="/edit/:id" /> 
        <Delete path="/delete/:id"/>
      </Router>
    </div>
  );
}

export default App;
