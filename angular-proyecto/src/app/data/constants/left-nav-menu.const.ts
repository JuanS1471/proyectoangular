import { ILeftNavMenu } from '../interfaces';
import { faUser, faCog, faClipboard, faComment, faHeart, faBookmark, faChartLine, faCogs, faVideo } from '@fortawesome/free-solid-svg-icons';
import { PERMISSIONS_ENUM, ROLES_ENUM } from '../enum';
import { RESOURCE_BY_ROUTES } from './routes';

export const LEFT_NAV_MENUS: ILeftNavMenu[] = [
    {
        title: 'Mi cuenta',
        links: [
            {
                icon: faUser,
                name: 'Tabla de usuarios',
                link: '/panel/user',
                roles: RESOURCE_BY_ROUTES.PANEL_USER_TABLE
            },
            {
                icon: faCog,
                name: 'Mi cuenta',
                link: '/panel/user/1',
                roles: RESOURCE_BY_ROUTES.PANEL_USER_DETAIL
            },
            {
                icon: faClipboard,
                name: 'Historial'
            },
            {
                icon: faComment,
                name: 'Comentarios'
            }
        ]
    },
    {
        title: 'Servicios',
        links: [
            {
                icon: faVideo,
                name: 'Videos'
            },
            {
                icon: faHeart,
                name: 'Favoritos'
            },
            {
                icon: faBookmark,
                name: 'Articulos'
            }
        ]
    }
]