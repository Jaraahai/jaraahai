import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Auth } from "./pages/auth/authPage";
import { ProfilePage } from "./pages/profile/profilePage";
import { MainPage } from "./pages/main/mainPage";
// import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./pages/auth/protectedRoute";
import useAuthState from "./hooks/useAuthState";
import Dashboard from "./pages/dashboard/dashboardPage";
import LobbyPage from "./pages/lobby/lobbyPage";

function App() {
  const { user, loading } = useAuthState();
  console.log("user: ", user);
  if (loading === true) {
    return <div className="container"></div>;
  }
  return (
    <div className="App">
      <Router>
        {/* <div>
          <Navbar />
        </div> */}

        <Routes>
          <Route path="/" element={<MainPage />} />

          {user ? (
            <>
              <Route
                path="/auth"
                element={<Navigate to="/dashboard" replace ex />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/profile"
                element={<ProtectedRoute element={<ProfilePage />} />}
              />
              <Route path="/lobby/:lobbyId" element={<LobbyPage />} />
            </>
          ) : (
            <>
              <Route path="/auth" element={<Auth />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
