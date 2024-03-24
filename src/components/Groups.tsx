import { FC } from "react";
import User from "./User";
import { useUsers } from "../services/useUsers";
import { User as UserTypes } from "../types/User";
import { useUpdateUserData } from "../services/useEditUser";

const Groups: FC = () => {
   const { users: usersData } = useUsers();
   const { updateUserData } = useUpdateUserData();

   const handleOnDrop = (e: React.DragEvent<HTMLDivElement>, text: string) => {
      const userDataString = e.dataTransfer.getData("userData");
      if (userDataString) {
         const userData: UserTypes = JSON.parse(userDataString);
         updateUserData({
            userId: userData.id,
            newGroup: text,
            hasGroup: true,
         });
      }
   };

   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
   };

   return (
      <div className="w-[65%] bg-slate-200/35 rounded-md m-4 p-2 items-center ">
         <div className="grid grid-cols-2 gap-4 mx-2 my-3 text-slate-100 font-serif font-bold lg:grid-cols-4 items-center h-full overflow-y-auto">
            <div
               onDragOver={handleDragOver}
               onDrop={(e) => handleOnDrop(e, "Grupa 1")}
               className="h-full"
            >
               <p className="bg-slate-100/35 rounded-full p-3 text-center">
                  Grupa 1
               </p>
               {usersData
                  ?.filter((user) => user.group === "Grupa 1")
                  .map((filteredUser) => {
                     return (
                        <User userData={filteredUser} key={filteredUser.id} />
                     );
                  })}
            </div>
            <div
               onDragOver={handleDragOver}
               onDrop={(e) => handleOnDrop(e, "Grupa 2")}
               className="h-full"
            >
               <p className="bg-slate-100/35 rounded-full p-3 text-center">
                  Grupa 2
               </p>

               {usersData
                  ?.filter((user) => user.group === "Grupa 2")
                  .map((filteredUser) => {
                     return (
                        <User userData={filteredUser} key={filteredUser.id} />
                     );
                  })}
            </div>
            <div
               onDragOver={handleDragOver}
               onDrop={(e) => handleOnDrop(e, "Grupa 3")}
               className="h-full"
            >
               <p className="bg-slate-100/35 rounded-full p-3 text-center">
                  Grupa 3
               </p>
               {usersData
                  ?.filter((user) => user.group === "Grupa 3")
                  .map((filteredUser) => {
                     return (
                        <User userData={filteredUser} key={filteredUser.id} />
                     );
                  })}
            </div>
            <div
               onDragOver={handleDragOver}
               onDrop={(e) => handleOnDrop(e, "Grupa 4")}
               className="h-full"
            >
               <p className="bg-slate-100/35 rounded-full p-3 text-center">
                  Grupa 4
               </p>
               {usersData
                  ?.filter((user) => user.group === "Grupa 4")
                  .map((filteredUser) => {
                     return (
                        <User userData={filteredUser} key={filteredUser.id} />
                     );
                  })}
            </div>
         </div>
      </div>
   );
};

export default Groups;
