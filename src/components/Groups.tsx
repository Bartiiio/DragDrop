import { FC } from "react";
import User from "./User";
import { useUsers } from "../services/useUsers";

interface GroupsProps {}

const Groups: FC<GroupsProps> = () => {
   const { users: usersData } = useUsers();
   return (
      <div className="w-[65%] bg-slate-200/35 rounded-md m-4 p-2 items-center ">
         <div className="grid grid-cols-2 gap-4 mx-2 my-3 text-slate-100 font-serif font-bold lg:grid-cols-4 items-center h-full overflow-y-auto">
            <div className="h-full">
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
            <div draggable className="h-full">
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
            <div draggable className="h-full">
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
            <div draggable className="h-full">
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
