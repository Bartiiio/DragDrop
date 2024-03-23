export interface User {
   id: number;
   created_at: number;
   name: string;
   photo: string;
   hasGroup: boolean;
   isBlocked: boolean;
   group: string;
   city: string;
}
