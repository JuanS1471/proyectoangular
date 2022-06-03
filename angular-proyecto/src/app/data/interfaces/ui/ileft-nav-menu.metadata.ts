import { PERMISSIONS_ENUM, ROLES_ENUM } from "../../enum";

export interface ILeftNavMenu {
    title: string;
    links:{
        icon: any;
        name: string;
        link?: string;
        method?: () => any;
        roles?: ROLES_ENUM[];
    }[];
}