import './App.css';
import Nav from './components/Nav';
import PreviewBox from './components/MainExampleComponents/PreviewBox';
import {
  Route,
  Routes
} from "react-router-dom";


function App() {

  return (
    <div className="App">
          <Nav />
            <Routes>
              <Route path="/" exact element={<PreviewBox />} />
            </Routes>
    </div>
  );
}

export default App;
