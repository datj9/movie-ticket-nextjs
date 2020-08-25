import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Button, Container } from "react-bootstrap";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { signUp } from "../../redux/user/actions";
import withAuth, { withAuthServerSideProps } from "../../hoc/withAuth";

function SignUp() {
    const router = useRouter();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const isLoading = useSelector((state) => state.user.isLoading);

    const submitFormSignUp = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        dispatchEvent(signUp({ email, name, password, confirmPassword }));
    };

    return (
        <div className='sign-up'>
            <Head>
                <title>Sign Up New Account</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Container className='h-100 d-flex align-items-center justify-content-center'>
                <div className='sign-up-form-and-title bg-white p-5 rounded'>
                    <div className='text-center h4 font-weight-bold'>Sign Up New Account</div>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type='email' placeholder='Enter email' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type='email' placeholder='John Doe' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type='password' placeholder='Password' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control ref={confirmPasswordRef} type='password' placeholder='Password' />
                        </Form.Group>
                        <Button
                            disabled={isLoading}
                            onClick={submitFormSignUp}
                            className='w-100'
                            variant='primary'
                            type='submit'
                        >
                            {isLoading ? ". . ." : "Sign Up"}
                        </Button>
                    </Form>
                    <div className='mt-3'>
                        <span> You already have account?</span>{" "}
                        <Link href='/login'>
                            <a className='link text-primary text-decoration-none'>Log In</a>
                        </Link>
                    </div>
                </div>
            </Container>
            <style jsx>
                {`
                    .sign-up {
                        background: url("./assets/images/login.jpg") no-repeat center/cover;
                        height: calc(100vh - 2.5rem);
                    }

                    @media only screen and (min-width: 768px) {
                        .sign-up-form-and-title {
                            width: 30rem;
                            height: 33rem;
                            margin: 0 auto;
                        }
                    }
                `}
            </style>
        </div>
    );
}

export const getServerSideProps = withAuthServerSideProps();

export default withAuth(SignUp);
