import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
