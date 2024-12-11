// IMPORTS
import { Outlet } from "react-router-dom";
import { Header } from "@/shared/components/Header";

const AppLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      {/* <h1>Footer</h1> */}
    </main>
  );
};

export default AppLayout;
