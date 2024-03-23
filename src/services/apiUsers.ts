import supabase from "./supabase";

export async function getUsers() {
   const { data: Users, error } = await supabase.from("Users").select("*");

   if (error) {
      console.error(error);
      throw new Error("Users not found");
   }

   return Users;
}

export async function updateUser(
   userId: number,
   newGroup: string,
   hasGroup: boolean
) {
   console.log(userId, newGroup);
   const { data, error } = await supabase
      .from("Users")
      .update({ group: newGroup, hasGroup: hasGroup })
      .eq("id", userId)
      .select();
   if (error) {
      console.error("Error updating user:", error);
      throw new Error("User group could not be updated");
   }
   return data;
}
