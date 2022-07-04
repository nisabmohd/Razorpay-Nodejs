import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./pages/Shop";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
