import {Outlet, Navigate} from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ProtectedRoute(){
    const auth =  useAuth();

    return auth.isAuthenticated ? <Outlet/> : <Navigate to="/"/>

}