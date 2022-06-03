import { ROLES_ENUM } from "../../enum";

export interface IapiUserAuth {
    fullname: string;
    age: number;
    token: string;
    avatar: string;
    work: string;
    role: ROLES_ENUM
}