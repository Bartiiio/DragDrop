import { FC } from "react";
import Sidebar from "../components/Sidebar";
import MainDashboard from "../components/MainDashboard";

const Dashboard: FC = () => {
   return (
      <div className="h-full w-full flex flex-row">
         <Sidebar />
         <MainDashboard />
      </div>
   );
};

export default Dashboard;
