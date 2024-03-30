import { ISupport } from "./ISupport";
import { IUser } from "./IUser";

export interface IOneUserResponse {
    data: IUser,
    support: ISupport
}