export * from "./error.type";
import { Request } from "express";

export interface newUser {
  name: string;
  email: string;
  password: string;
}

export interface userAcess {
  email: string;
  password: string;
}

export interface JWTPayload {
  userId: number;
}

export type AuthenticatedRequest = Request & JWTPayload;

export interface OriginAndDestin {
  origin: string;
  destination: string;
  intermediates: string[];
}

export interface routeDistanceAndDuration {
  routeDistance: number;
  expectedDuration: number;
  routeInfo: {
    distance: any;
    duration: any;
    startAddress: any;
    endAddress: any;
  }[];
}