import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Machines from './pages/Machines';
import Alerts from './pages/Alerts';
import Schedule from './pages/Schedule';
import Logs from './pages/Logs';
import Users from './pages/Users';
import Login from './pages/Login';
import './App.css';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {location.pathname !== '/login' && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {location.pathname !== '/login' && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/machines" element={<Machines />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/users" element={<Users />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;