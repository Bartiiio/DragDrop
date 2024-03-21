import { EllipsisVertical } from "lucide-react";
import { FC } from "react";

interface UsersProps {}

const Users: FC<UsersProps> = () => {
   return (
      <div className="w-[40%] h-full bg-slate-200/40 rounded-md m-4 p-2">
         <div className="flex items-center p-2 justify-between">
            <p className="text-xl font-bold text-white ">Użytkownicy</p>
            <EllipsisVertical className="cursor-pointer" />
         </div>
      </div>
   );
};

export default Users;
