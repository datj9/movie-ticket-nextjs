import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/user/actions";
import { useRouter } from "next/router";

const Header = () => {
    const dispatch = useDispatch();
    const changeLinkActive = (indexMenu) => {
        setNavLinkActive(indexMenu);
    };
    const currentUser = useSelector((state) => state.user.currentUser);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const message = useSelector((state) => state.user.message);
    const router = useRouter();

    useEffect(() => {
        if (message === "logged out success") {
            router.push("/");
        }
    }, [message]);
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
                            <a className='nav-link text-center d-flex align-items-center'>
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
                                <a className='nav-link text-center'>
                                    <Button>Sign In</Button>
                                </a>
                            </Link>
                        )}

                        {isAuthenticated ? (
                            <span className='nav-link'>
                                <Button onClick={() => dispatch(logOut())}>Log Out</Button>
                            </span>
                        ) : null}
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
