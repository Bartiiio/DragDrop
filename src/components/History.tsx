import { FC } from "react";

interface HistoryProps {}

const History: FC<HistoryProps> = () => {
   return (
      <div className="w-full bg-slate-300/50 rounded-full text-white overflow-y-auto mt-4">
         <p className="p-2 ml-1">History</p>
      </div>
   );
};

export default History;
