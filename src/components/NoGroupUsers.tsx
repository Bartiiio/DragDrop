import { EllipsisVertical } from "lucide-react";
import { FC } from "react";
import User from "./User";
import { useUsers } from "../services/useUsers";
import { useUpdateUserData } from "../services/useEditUser";
import { User as UserTypes } from "../types/User";

const NoGroupUsers: FC = () => {
   const { users: usersData } = useUsers();
   const { updateUserData } = useUpdateUserData();

   const handleOnDrop = (e: React.DragEvent<HTMLDivElement>, text: string) => {
      const userDataString = e.dataTransfer.getData("userData");
      if (userDataString) {
         const userData: UserTypes = JSON.parse(userDataString);
         updateUserData({
            userId: userData.id,
            newGroup: text,
            hasGroup: false,
         });
      }
   };

   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
   };

   return (
      <>
         <div
            onDragOver={handleDragOver}
            onDrop={(e) => handleOnDrop(e, "")}
            className="h-1/2 p-2 overflow-y-auto font-serif"
         >
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
