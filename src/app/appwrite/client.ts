import { Account, Client, Databases } from "appwrite";

export const appwriteClient = new Client();

appwriteClient
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

export const appwriteAccount = new Account(appwriteClient);
export const appwriteDatabase = new Databases(appwriteClient);
export { ID, Role } from "appwrite";
