import {NavLink, Link, useNavigate} from 'react-router-dom';
import 'mdb-ui-kit/css/mdb.min.css';
import React, { useState } from 'react';
import { MDBBtn, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit';
import { CartProvider } from '../context/CartContext';


interface DefaultLayoutProps {
    children?: React.ReactNode;
  }

 
export default function DefaultLayout({children}: DefaultLayoutProps){
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const [allProducts, setAllProducts]= useState([]);
    const [total, setTotal]=useState(0);
    const [countProducts, setCountProducts]= useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

   const [active, setActive]= useState(false);
   const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
    navigate('/'); // Reemplaza con la ruta de login o home
  };
    
  const toggleCollapse = () => setIsOpen(!isOpen);
    return (
        <>
        <CartProvider>
        <header>
        <MDBNavbar expand="lg" light  bgColor="light" className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <MDBContainer fluid >
        <MDBNavbarBrand >
        <Link to ='/dashboard'>
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="15"
            alt="MDB Logo"
            loading="lazy"
          />
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarNav className="me-auto  mb-lg-0">
            <NavLink className="text-reset me-3" to ='/createproduct'>
              <MDBNavbarItem>AddProduct</MDBNavbarItem>
            </NavLink>
            <NavLink className="text-reset me-3" to ='/tableproduct'>
              <MDBNavbarItem>ManageProdct</MDBNavbarItem>
            </NavLink>
            <NavLink className="text-reset me-3" to ='/createorder'>
              <MDBNavbarItem>Order</MDBNavbarItem>
            </NavLink>
          </MDBNavbarNav>
        <MDBNavbarToggler onClick={toggleCollapse} aria-controls="basic-navbar-nav">
         
        </MDBNavbarToggler>
        <MDBCollapse navbar open={isOpen}>
          <div className="d-flex justify-content-end">
            <MDBDropdown>
            <MDBDropdownToggle className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink">
            <NavLink className="text-reset me-3" to="/createorder">
                  <MDBIcon fas icon="shopping-cart" />
            </NavLink>
                {/* <MDBIcon fas icon="shopping-cart" onClick={() => setActive(!active)} /> */}
                
                {/* <span className="badge rounded-pill badge-notification bg-danger">1</span> */}
              </MDBDropdownToggle>
            </MDBDropdown>
            <MDBDropdown>
              <MDBDropdownToggle className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink">
                <MDBIcon fas icon="bell" />
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu dropdownMenuEnd aria-labelledby="navbarDropdownMenuLink">
                <MDBDropdownItem href="#">Some news</MDBDropdownItem>
                <MDBDropdownItem href="#">Another news</MDBDropdownItem>
                <MDBDropdownItem href="#">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBDropdown>
              <MDBDropdownToggle className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu dropdownMenuEnd aria-labelledby="navbarDropdownMenuAvatar">
                {/* <MDBDropdownItem href="#"></MDBDropdownItem> */}
                <MDBDropdownItem href="#">Settings</MDBDropdownItem>
                <MDBBtn className='me-1' color='warning' onClick={handleLogout}>
                <MDBDropdownItem >Logout</MDBDropdownItem>
                </MDBBtn>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </header>
        <main>
            {children}
        </main>
    </CartProvider>
        </>
    )
}


