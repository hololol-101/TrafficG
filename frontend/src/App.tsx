// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/account/Login';
import Signup from './pages/account/Signup';
import ShowList from './pages/show/showList';
import './styles/colors.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="showList" element={<ShowList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
