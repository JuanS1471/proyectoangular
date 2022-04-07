import { ILeftNavMenu } from '../interfaces';
import { faUser, faCog, faClipboard, faComment, faHeart, faBookmark, faChartLine, faCogs, faVideo } from '@fortawesome/free-solid-svg-icons';

export const LEFT_NAV_MENUS: ILeftNavMenu[] = [
    {
        title: 'Mi cuenta',
        links: [
            {
                icon: faUser,
                name: 'Perfil'
            },
            {
                icon: faCog,
                name: 'Mi cuenta'
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