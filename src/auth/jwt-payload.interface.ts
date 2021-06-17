import { isMainThread } from "worker_threads";

export interface JwtPayload{
    username: string
}