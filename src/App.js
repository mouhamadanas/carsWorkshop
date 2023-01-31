import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Card from "./views/card";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/card" element={<Card />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
