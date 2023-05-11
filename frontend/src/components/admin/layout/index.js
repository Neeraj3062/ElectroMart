import React, { Fragment } from "react";
import Adminnavbar from "../partials/AdminNavbar";
import AdminSidebar from "../partials/AdminSidebar";


const AdminLayout = ({ children }) => {
  return (
    <Fragment>
      <Adminnavbar />
      <section className="flex bg-gray-100">
        <AdminSidebar />
        <div className="w-full md:w-11/12 h-full">
          {children}
        </div>
      </section>
    </Fragment>
  );
};

export default AdminLayout;
