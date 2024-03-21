import { Star, Users } from "lucide-react";
import { FC } from "react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
   return (
      <div className="bg-customColor1 w-24 flex flex-col items-center">
         <div className="mt-6 p-2 w-[62px] bg-slate-100 rounded-md flex flex-col hover:bg-slate-300 cursor-pointer">
            <div className="flex items-center flex-col">
               <Star className="" />
               <p className="text-[0.55rem] font-bold mt-1">Zakładka 1</p>
            </div>
         </div>
         <div className="mt-5 p-2 w-[62px] bg-slate-100 rounded-md flex flex-col hover:bg-slate-300 cursor-pointer">
            <div className="flex items-center flex-col">
               <Star className="" />
               <p className="text-[0.55rem] font-bold mt-1">Zakładka 2</p>
            </div>
         </div>
         <div className="mt-5 p-2 w-[62px] bg-slate-100 rounded-md flex flex-col hover:bg-slate-300 cursor-pointer">
            <div className="flex items-center flex-col">
               <Users className="" />
               <p className="text-[0.55rem] font-bold mt-1">Users</p>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
