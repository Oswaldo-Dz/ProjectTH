import DefaultLayout from '../Layout/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
//

import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

import { API_URL } from '../auth/constants';
import LogOutLayout from '../Layout/LogOutLayout';
import  {UserProvider} from '../context/usercontext/UserContext';
import Swal from 'sweetalert2';
 
interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const auth = useAuth();
    const goTo = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, setUser] = useState<any>(null);
    

    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username,
                    password
                })

            });
            const jsonData = await response.json();
            if(response.ok){   
              Swal.fire({
                title: "Bienvenido!",
                text: "Disfrute de nuestras promociones y más!",
                icon: "success"
              });
                console.log("Login Success");
                const data = jsonData.body.users;
                console.log(data);
                setUser(data);
                setErrorResponse("");
                auth.isAuthenticated = true;
                setIsLoggedIn(true);
                if(auth.isAuthenticated){
                    goTo("/dashboard");
                };
        }else{
            console.log("algo salio mal con la respuesta");
            setIsLoggedIn(false);
            return;
            //setErrorResponse(json.message);

        }
    }catch(error){
            console.log(error);
        };
        //auth.signUp(username, email, password);
    }

    // if(auth.isAuthenticated){
    //     return <Navigate to="/dashboard" />
    // }

    return (
        <>
        <UserProvider>
        <header>
         {isLoggedIn ? <DefaultLayout/> : <LogOutLayout />}
         </header>
        <div className='container p-3 my-5 d-flex flex-column w-50 center'>
          <div className="col d-flex justify-content-center">
          <h2 className='text-center'>THE GARAGE</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="Usuario" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label className="form-label" htmlFor="form2Example1">Usuario</label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>
            <div className="row mb-4">
              <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>
            </div>
            <div className="text-center">
              <p>Not a member? <a className="nav-link" href="/signup"><Link to="/signup">Crear cuenta</Link></a></p>
            </div>
          </form>
        </div>
        </UserProvider>
        </>
      );

};