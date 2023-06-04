import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Account, SignIn } from "./components";

function App() {
  return (
    <div className="font-body">
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
