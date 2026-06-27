                                                                                                                                                                                                                                                                import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoverPage from './pages/CoverPage';
import TasksPage from './pages/TaskPage';
import NewTaskPage from './pages/NewTaskingPage';
import EditTaskPage from './pages/EditPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import TrashPage from './pages/TrashPage';
import ProtectedRoute from './universal/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route path="/" element={
          <ProtectedRoute><CoverPage /></ProtectedRoute>
        } />
        <Route path="/tasks" element={
          <ProtectedRoute><TasksPage /></ProtectedRoute>
        } />
        <Route path="/new-task" element={
          <ProtectedRoute><NewTaskPage /></ProtectedRoute>
        } />
        <Route path="/edit-task/:id" element={
          <ProtectedRoute><EditTaskPage /></ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute><ProfilePage /></ProtectedRoute>
        } />
        <Route path="/trash" element={
          <ProtectedRoute><TrashPage /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;