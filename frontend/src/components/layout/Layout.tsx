// src/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
const Layout = () => {
  return (
    <>
    <Header />
    <main>
      <div
      
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Outlet />
    </div>

    </main> 
    </> );
};

export default Layout;
