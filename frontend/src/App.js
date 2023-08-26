import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCandidate from "./pages/AddCandidate";
import ViewCandidates from "./pages/ViewCandidates";
import AuthGuard from "./components/AuthGuard";
import CandidateDetails from "./pages/CandidateDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/add/candidate" element={<AuthGuard><AddCandidate/></AuthGuard>} />
        <Route path="/view/candidates" element={<AuthGuard><ViewCandidates/></AuthGuard>} />
        <Route path="/view/candidate/:id" element={<AuthGuard><CandidateDetails/></AuthGuard>} />
      </Routes>
    </Router>
  );
}

export default App;
