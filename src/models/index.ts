export * from "./error.type";

export interface newUser {
  name: string;
  email: string;
  password: string;
}

export interface loginUser {
  email: string;
  password: string;
}
