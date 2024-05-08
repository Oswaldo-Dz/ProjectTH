import {NavLink, Link, useNavigate} from 'react-router-dom';
import 'mdb-ui-kit/css/mdb.min.css';
// import 'mdb-ui-kit/css/mdb.dark.min.css';
import { MDBDropdown, MDBCollapse, MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav,MDBNavbarItem, MDBDropdownToggle, MDBDropdownItem, MDBDropdownMenu, MDBBtn , MDBNavbarLink} from 'mdb-react-ui-kit';
import React from 'react';


interface DefaultLayoutProps {
    children?: React.ReactNode;
  }

 
export default function LogOutLayout({children}: DefaultLayoutProps){
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      navigate('/'); // Reemplaza con la ruta de login o home
    };
    

  const toggleCollapse = () => setIsOpen(!isOpen);
    return (
        <>
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
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarToggler onClick={toggleCollapse} aria-controls="basic-navbar-nav">
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>
            <MDBCollapse navbar open={isOpen}>
              <div className="d-flex justify-content-end">
                <NavLink className="text-reset me-3" to="/signup">
                  <MDBIcon fas icon="shopping-cart" />
                </NavLink>
                <MDBDropdown>
                  <MDBDropdownToggle className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink">
                    <MDBIcon fas icon="bell" />
                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu dropdownMenuEnd aria-labelledby="navbarDropdownMenuLink">
                    <MDBDropdownItem href="#" className='text-center'>Promociones</MDBDropdownItem>
                    <MDBDropdownItem href="#" className='text-center'>Suscribete</MDBDropdownItem>
                    <MDBDropdownItem href="#" className='text-center'>Vuelvete Socio</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown>
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
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
            </header>
        <main>
            {children}
        </main>
        </>
    )
}
