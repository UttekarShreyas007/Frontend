
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateCard from "./components/UpdateCard";
import Createcard from "./components/CreateCard";
import CardDisplay from "./components/CardDisplay";
import Register from "./components/Regiter";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/createcard" element={<Createcard />} />
          <Route path="/updatecard" element={<UpdateCard />} />
          <Route path="/card-display/:name" element={<CardDisplay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
