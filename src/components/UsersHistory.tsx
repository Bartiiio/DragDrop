import { FC } from "react";
import History from "./History";

interface UsersHistoryProps {}

const UsersHistory: FC<UsersHistoryProps> = () => {
   const map: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
   return (
      <div className="h-1/2 border-t-2 border-slate-200 overflow-y-auto">
         <div className="mt-2 p-1 text-slate-100 font-bold font-serif">
            Users history
         </div>
         <div>
            {map.map((x) => {
               return <History key={x} />;
            })}
         </div>
      </div>
   );
};

export default UsersHistory;
