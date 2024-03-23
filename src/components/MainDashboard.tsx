import { FC } from "react";
import Users from "./Users";
import Groups from "./Groups";

const MainDashboard: FC = () => {
   return (
      <div className="h-screen flex-1 bg-gradient-to-r from-indigo-800 via-pink-500 to-pink-600 flex overflow-hidden">
         <Users />
         <Groups />
      </div>
   );
};

export default MainDashboard;
