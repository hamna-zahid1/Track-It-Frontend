import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TaskBoardPage from '../pages/TaskBoardPage';
import PrivateRoute from '../routes/PrivateRoute';
import Profile from '../pages/Profile';
import CreateTask from '../pages/CreateTask'; // <- New Import


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-task" element={<CreateTask />} /> {/* New Route */}

      

      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <TaskBoardPage />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
