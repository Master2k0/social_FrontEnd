export interface IUser {
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt?: Date;
  slug?: string;
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email?: string;
  refreshToken?: string;
  isVerified?: boolean;
}
