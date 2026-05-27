import DashboardNavbar from "@/Components/Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "@/Components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNavbar></DashboardNavbar>

      <div className="flex flex-1">
        <Sidebar className=""></Sidebar>
        <main className="w-full ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
