import { Navigate, Outlet } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const PrivateRoutes = () => {

    const { getItem } = useLocalStorage();

    function isLoggedIn() {
        const token = getItem('token');

        return token !== null;
    }

    return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
