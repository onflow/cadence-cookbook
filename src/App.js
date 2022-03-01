import './App.css';
import PreviewBox from './components/MainExampleComponents/PreviewBox';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {


  return (
    <div className="App">
            <Routes>
              <Route path="/" exact element={<PreviewBox />} />
            </Routes>
    </div>
  );
}

export default App;
