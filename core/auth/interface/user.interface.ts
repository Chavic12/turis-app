export interface User {
  id: string;
  email: string;
  name: string;
  roles: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  avatar?: string;
  bio?: string;
  location?: string;
  birthDate?: string;
}
