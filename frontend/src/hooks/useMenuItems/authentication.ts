// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
};

const authentication = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined,
        },
        {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined,
        },
    ],
};

export default authentication;
