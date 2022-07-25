import { useState } from 'react';

import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Main from './components/main';

import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className='containerr'>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Main />
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> 
    </div>
  );
}

export default App;