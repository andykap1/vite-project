// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CoverPage from './pages/CoverPage';
// import TasksPage from './pages/TaskPage';
// import NewTaskPage from './pages/NewTaskingPage';
// import EditTaskPage from './pages/EditPage';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/src/pages/CoverPage.tsx" element={<CoverPage />} />
//         <Route path="/src/pages/TaskPage.tsx" element={<TasksPage />} />
//         <Route path="/src/pages/NewTaskingPage.tsx" element={<NewTaskPage />} />
//         <Route path="/src/pages/EditPage.tsx" element={<EditTaskPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoverPage from './pages/CoverPage';
import TasksPage from './pages/TaskPage';
import NewTaskPage from './pages/NewTaskingPage';
import EditTaskPage from './pages/EditPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/new-task" element={<NewTaskPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;