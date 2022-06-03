import { ROLES_ENUM } from "../../enum"

export const ROUTES_PATHS = {
    AUTH: {
        DEFAULT: 'auth',
        LOGIN: 'login'
    },
    PANEL: {
        DEFAULT: 'panel',
        USER: 'user'
    },
    SERVER:{
        E_404:'404',
        E_401:'401'
    }
}

export const INTERNAL_PATHS = {
    AUTH_DEFAULT: '${ROUTES_PATHS.AUTH.DEFAULT}',
    AUTH_LOGIN: '${ROUTES_PATHS.AUTH.LOGIN}',
    PANEL_DEFAULT:'${ROUTES_PATHS.PANEL.DEFAULT}',
    PANEL_USER:'${ROUTES_PATHS.PANEL.USER}',
    SERVER_E_404: '${ROUTES_PATHS.SERVER.E_404}',
    SERVER_E_401: '${ROUTES_PATHS.SERVER_E_401}'
}

export const INTERNAL_ROUTES ={
    AUTH_LOGIN: '/${INTERNAL_PATHS.AUTH.DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}',
    PANEL_USER: '/${INTERNAL_PATHS.PANEL_DEFAULT}/${INTERNAL_PATHS.PANEL_USER}',
    SERVER_E_404: '/${INTERNAL_PATHS.SERVER_E_404}',
    SERVER_E_401: '/${INTERNAL_PATHS.SERVER_E_401}'
}

export const RESOURCE_BY_ROUTES = {
    PANEL_USER_TABLE : [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN, ROLES_ENUM.USER],
    PANEL_USER_DETAIL :  [ROLES_ENUM.SUPER_ADMIN, ROLES_ENUM.ADMIN]
}