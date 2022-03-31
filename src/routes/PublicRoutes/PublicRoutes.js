import { Navigate, Outlet } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const PublicRoutes = () => {

    const { getItem } = useLocalStorage();

    function isLoggedIn() {
        const token = getItem('token');

        return token !== null;
    }

    return isLoggedIn() ? <Navigate to="/" />  : <Outlet /> ;
}

export default PublicRoutes;
