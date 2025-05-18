// src/layout/Layout.tsx
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
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
  );
};

export default Layout;
