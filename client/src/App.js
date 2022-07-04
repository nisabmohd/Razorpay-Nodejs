import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./pages/Shop";
import { Success } from "./pages/Success";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/success/*" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
