import { FC } from "react";
import { User as UserTypes } from "../types/User";

interface UserProps {
   userData: UserTypes;
}

const User: FC<UserProps> = ({ userData }) => {
   return (
      <div className="flex flex-wrap mt-8 items-center justify-center text-black font-bold">
         <div className="h-40 w-32 bg-slate-100 my-4 mx-2 rounded-lg flex flex-col justify-between items-center cursor-pointer">
            <div className="rounded-full overflow-hidden mt-4 w-20 h-20">
               <img
                  src={userData?.photo}
                  alt="profile"
                  className="object-cover object-center w-full h-full"
               />
            </div>
            <div className="my-2">
               <div className="text-center font-bold text-xl">
                  {userData?.name}
               </div>
               <div className="text-center text-gray-500">{userData?.city}</div>
            </div>
         </div>
      </div>
   );
};

export default User;
