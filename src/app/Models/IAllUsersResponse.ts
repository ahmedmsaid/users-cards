import { ISupport } from "./ISupport";
import { IUser } from "./IUser";

export interface IAllUsersResponse {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: IUser[],
    support: ISupport
}

