import { Route, Routes } from 'react-router-dom';

import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PatentSelection from './pages/patentSelection/PatentSelection';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Main />} />
      <Route path="/patentSelection/*" element={<PatentSelection />} />
    </Routes>
  );
}

export default App;
