import './App.css';
import Nav from './components/Nav';
import PreviewBox from './components/MainExampleComponents/PreviewBox';
import Searchbox from './components/MainExampleComponents/Searchbox';
import { flowExamples } from './examples/FlowExamples';
import {
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import MarketplaceBP from './components/BestPractices/MarketplaceBP';


function App() {
  console.log(flowExamples)

  return (
    <div className="App">
      {/* <Router>
      
          <Route exact path="/"> */}
          <Nav />
            <Routes>
              <Route path="/" exact element={<PreviewBox />} />
              <Route path="/marketplace-bestpractices" exact element={<MarketplaceBP />} />

            </Routes>
            {/* // <PreviewBox flowExamples={flowExamples} /> */}
          {/* </Route>
      </Router> */}

      {/* <Searchbox /> */}
      
    </div>
  );
}

export default App;
