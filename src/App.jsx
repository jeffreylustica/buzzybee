import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Account, SignIn } from "./components";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="font-body">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
