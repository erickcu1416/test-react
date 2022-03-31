import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { withRouter } from '../hooks/withRouter';
import { EmployeesPage } from '../pages/EmployeesPage/EmployeesPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { UploadPage } from '../pages/UploadPage/UploadPage';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import PublicRoutes from './PublicRoutes/PublicRoutes';


export const Navigation = withRouter(({ history }) => {
  return (
      <Fragment>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path='/' element={<PrivateRoutes/>}>
            <Route exact path='/' element={<EmployeesPage/>}/>
            <Route exact path='/upload' element={<UploadPage/>}/>
          </Route>
          <Route exact path='/login' element={<PublicRoutes/>}>
            <Route exact path='/login' element={<LoginPage/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Fragment>
  );
});