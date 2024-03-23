import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./apiUsers";

export function useUsers() {
   const { data: users, error } = useQuery({
      queryKey: ["Users"],
      queryFn: getUsers,
   });

   return { users, error };
}
