export interface IapiUserAuth {
    fullname: string;
    age: number;
    token: string;
    avatar: string;
    work: string;
    permissons: {
        TABLE_USER: 1 | 0,
        DETAIL_USER: 1 | 0,
    }
}