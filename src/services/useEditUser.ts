import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser } from "./apiUsers";

interface UserUpdateVariables {
   userId: number;
   newGroup: string;
   hasGroup: boolean;
}

export function useUpdateUserData() {
   const queryClient = useQueryClient();

   const { mutate: updateUserData } = useMutation<
      void,
      Error,
      UserUpdateVariables
   >({
      mutationFn: async ({ userId, newGroup, hasGroup }) => {
         try {
            await updateUser(userId, newGroup, hasGroup);
            return;
         } catch (error) {
            throw new Error("Failed to update user group");
         }
      },
      onSuccess: () => {
         toast.success("User group successfully changed");
         queryClient.invalidateQueries({ queryKey: ["Users"] });
      },
   });

   return { updateUserData };
}
