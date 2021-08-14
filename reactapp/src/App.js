import About from './Components/About'
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router >
      <About  path="about"/>
      </Router>
    </div>
  );
}

export default App;
