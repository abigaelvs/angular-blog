export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  createdAt: string;
  enabled: boolean;
}

export interface Permission {
  id: number;
  name: string;
}