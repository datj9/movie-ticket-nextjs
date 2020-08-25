import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/user/actions";
import withAuth, { withAuthServerSideProps } from "../../hoc/withAuth";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.isLoading);
    const router = useRouter();

    const signInSubmit = async (e) => {
        e.preventDefault();

        dispatch(signIn({ email, password }));
    };

    return (
        <div className='sign-in'>
            <Container className='h-100 d-flex align-items-center justify-content-center'>
                <div className='sign-in-form-and-title bg-white p-5 rounded'>
                    <div className='text-center h4 font-weight-bold'>Sign In To Your Account</div>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                placeholder='Enter email'
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                placeholder='Password'
                            />
                        </Form.Group>
                        <Button
                            disabled={isLoading}
                            onClick={signInSubmit}
                            className='w-100'
                            variant='primary'
                            type='submit'
                        >
                            {isLoading ? ". . ." : "Log In"}
                        </Button>
                    </Form>
                    <div className='mt-3'>
                        <span> You don't have account?</span>{" "}
                        <Link href='/signup'>
                            <a className='link text-primary text-decoration-none'>Sign Up</a>
                        </Link>
                    </div>
                </div>
            </Container>
            <style jsx>
                {`
                    .sign-in {
                        background: url("./assets/images/login.jpg") no-repeat center/cover;
                        height: calc(100vh - 2.5rem);
                    }

                    @media only screen and (min-width: 768px) {
                        .sign-in-form-and-title {
                            width: 30rem;
                            height: 24rem;
                            margin: 0 auto;
                        }
                    }
                `}
            </style>
        </div>
    );
}

export const getServerSideProps = withAuthServerSideProps();

export default withAuth(LogIn);
