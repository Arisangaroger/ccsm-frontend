import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardContent from './components/DashboardContent';
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Landing from "./pages/Landing"

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
       
          <Route path="/dashboard" element={<DashboardLayout />}>
         
            <Route index element={<DashboardContent />} />
          </Route>
      
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/login" element={<SignIn/>}/>
       
          <Route path="*" element={<Landing/>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App; 