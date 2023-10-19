export * from "./error.type";
import { Request } from "express";

export interface UserAcess {
  email: string;
  password: string;
}

export type NewUser = UserAcess & {
  name: string;
};

export interface JWTPayload {
  userId: number;
}

export type AuthenticatedRequest = Request & JWTPayload;

export interface OriginAndDestin {
  origin: string;
  destination: string;
  intermediates: string[];
}

export interface RouteDistanceAndDuration {
  routeDistance: number;
  expectedDuration: number;
  routeInfo: {
    distance: any;
    duration: any;
    startAddress: any;
    endAddress: any;
  }[];
}