import { FC } from "react";
import NoGroupUsers from "./NoGroupUsers";
import UsersHistory from "./UsersHistory";

const Users: FC = () => {
   return (
      <div className="w-[35%] bg-slate-200/35 rounded-md m-4 p-2 flex flex-col overflow-hidden">
         <NoGroupUsers />
         <UsersHistory />
      </div>
   );
};

export default Users;
