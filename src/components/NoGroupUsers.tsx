import { EllipsisVertical } from "lucide-react";
import { FC } from "react";
import User from "./User";
import { useUsers } from "../services/useUsers";

const NoGroupUsers: FC = () => {
   const { users: usersData } = useUsers();
   return (
      <>
         <div className="h-1/2 p-2 overflow-y-auto font-serif">
            <div className="flex items-start justify-between">
               <p className="text-xl font-bold text-slate-100">Użytkownicy</p>
               <EllipsisVertical className="cursor-pointer text-slate-100 font-bold" />
            </div>
            <div className="flex flex-wrap">
               {usersData?.map((user) => {
                  if (user.hasGroup) return;
                  return <User userData={user} />;
               })}
            </div>
         </div>
      </>
   );
};

export default NoGroupUsers;
