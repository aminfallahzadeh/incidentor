// IMPORTS
import { Outlet } from "react-router-dom";
import { Header } from "@/shared/components/Header";

const AppLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default AppLayout;
