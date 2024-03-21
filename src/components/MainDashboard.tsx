import { FC } from "react";
import Users from "./Users";

interface MainDashboardProps {}

const MainDashboard: FC<MainDashboardProps> = () => {
   return (
      <div className="min-h-full flex-1 bg-gradient-to-r from-indigo-800 via-pink-500 to-pink-600 flex flex-col ">
         <Users />
      </div>
   );
};

export default MainDashboard;
