import { Fragment } from 'react';
import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Fragment>
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Layout;
