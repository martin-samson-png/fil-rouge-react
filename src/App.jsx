import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RegisterForm from "./components/User/RegisterForm";
import LogInForm from "./components/User/LogInForm";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LogInForm />} />
      </Routes>
    </Router>
  );
};

export default App;
