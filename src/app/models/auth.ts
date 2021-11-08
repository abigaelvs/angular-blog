import { Permission } from "./user";

export interface AuthResponse {
  jwt: string;
  username: string;
  permissions: Permission[]; 
}