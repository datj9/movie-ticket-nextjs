import React, { useState } from "react";
import Link from "next/link";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/user/actions";

const Header = () => {
    const [navLinkActive, setNavLinkActive] = useState(0);
    const dispatch = useDispatch();
    const changeLinkActive = (indexMenu) => {
        setNavLinkActive(indexMenu);
    };
    const currentUser = useSelector((state) => state.user.currentUser);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    return (
        <Navbar variant='dark' bg='dark' expand='lg'>
            <Container>
                <Link href='/'>
                    <a className='navbar-brand text-primary'>Movie Theater</a>
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                    <Nav className=''>
                        <Link href='/'>
                            <a
                                onClick={() => changeLinkActive(0)}
                                className={`nav-link text-center ${navLinkActive === 0 ? "active" : ""}`}
                            >
                                <span className='link text-primary'>Movies</span>
                            </a>
                        </Link>
                        {/* <Link href='/'>
                            <a
                                onClick={() => changeLinkActive(1)}
                                className={`nav-link text-center ${navLinkActive === 0 ? "active" : ""}`}
                            >
                                <span className='link text-primary'>Theaters</span>
                            </a>
                        </Link> */}
                        {isAuthenticated ? null : (
                            <Link href='/login'>
                                <a
                                    onClick={() => changeLinkActive(2)}
                                    className={`nav-link text-center ${navLinkActive === 0 ? "active" : ""}`}
                                >
                                    <Button>Sign In</Button>
                                </a>
                            </Link>
                        )}
                        {isAuthenticated ? <span className='text-white'>Hi, {currentUser.name}</span> : null}
                        {isAuthenticated ? <Button onClick={() => dispatch(logOut())}>Log Out</Button> : null}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <style jsx>
                {`
                    .active > span,
                    span.link:hover {
                        padding-bottom: 5px;
                        border-bottom: 2px solid #d72323;
                    }
                    .nav-link {
                        position: relative;
                    }
                `}
            </style>
        </Navbar>
    );
};

export default Header;
