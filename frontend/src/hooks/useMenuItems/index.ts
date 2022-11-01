// project import
import authentication from './authentication';
import dashboard from './dashboard';

const useMenuItems = () => {
    const menuItems = {
        items: [authentication, dashboard],
    };

    return menuItems;
};

export default useMenuItems;
