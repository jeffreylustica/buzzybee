import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Account, SignIn, ProtectedRoute } from "./components";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="font-body box-border">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
