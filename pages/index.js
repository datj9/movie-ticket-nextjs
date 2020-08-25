import Head from "next/head";
import "../styles/Home.module.scss";
import { Carousel, Card, Button, Row, Col } from "react-bootstrap";
import withAuth, { withAuthServerSideProps } from "../hoc/withAuth";

function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Movie Tickets</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='main'>
                <div className='now-showing mt-5'>
                    <h3 className='list-title font-weight-bold pb-3 text-uppercase'>Now Showing</h3>
                    <Row>
                        <Col xs={6} md={4} lg={3}>
                            <Card>
                                <Card.Img
                                    variant='top'
                                    src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17387519_p_v13_ad.jpg'
                                />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>Swallow</Card.Title>
                                    <Button className='p-1 mb-2' variant='info'>
                                        More Detail
                                    </Button>
                                    <Button className='p-1' variant='primary'>
                                        Buy Ticket
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <Card>
                                <Card.Img
                                    className='img-fluid'
                                    variant='top'
                                    src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p16987523_p_v13_ab.jpg'
                                />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>Resistance</Card.Title>
                                    <Button className='p-1 mb-2' variant='info'>
                                        More Detail
                                    </Button>
                                    <Button className='p-1' variant='primary'>
                                        Buy Ticket
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={3}>
                            <Card>
                                <Card.Img
                                    className='img-fluid'
                                    variant='top'
                                    src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17387953_p_v13_aa.jpg'
                                />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>The Other Lamb</Card.Title>
                                    <Button className='p-1 mb-2' variant='info'>
                                        More Detail
                                    </Button>
                                    <Button className='p-1' variant='primary'>
                                        Buy Ticket
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className='open-this-week mt-5'>
                    <h3 className='list-title font-weight-bold pb-3 text-uppercase'>Opening This Week</h3>
                    <Row>
                        <Col xs={6} sm={6} md={4} lg={3}>
                            <Card>
                                <Card.Img
                                    variant='top'
                                    src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p18109226_p_v13_aa.jpg'
                                />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>Survive The Night</Card.Title>
                                    <Button className='p-1 mb-2' variant='info'>
                                        More Detail
                                    </Button>
                                    <Button className='p-1' variant='primary'>
                                        Buy Ticket
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={3}>
                            <Card>
                                <Card.Img
                                    className='img-fluid'
                                    variant='top'
                                    src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17382312_p_v13_aa.jpg'
                                />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>Dream Horse</Card.Title>
                                    <Button className='p-1 mb-2' variant='info'>
                                        More Detail
                                    </Button>
                                    <Button className='p-1' variant='primary'>
                                        Buy Ticket
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className='coming-soon mt-5'>
                    <h3 className='list-title font-weight-bold pb-3 text-uppercase'>Coming Soon</h3>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <img
                                        className='d-block w-100'
                                        src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p16970726_p_v13_aa.jpg'
                                        alt='First slide'
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className='d-block w-100'
                                        src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17813839_p_v13_ab.jpg'
                                        alt='First slide'
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className='d-block w-100'
                                        src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17760742_p_v13_ac.jpg'
                                        alt='First slide'
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className='d-block w-100'
                                        src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p18137915_p_v13_ab.jpg'
                                        alt='First slide'
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <img
                                        className='d-block w-100'
                                        src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p18004375_p_v13_aa.jpg'
                                        alt='Film'
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className='d-block w-100'
                                        src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17633537_p_v13_aa.jpg'
                                        alt='First slide'
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className='d-block w-100'
                                        src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p18180450_p_v13_aa.jpg'
                                        alt='First slide'
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className='d-block w-100'
                                        src='https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17871471_p_v10_aa.jpg'
                                        alt='First slide'
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </main>

            <footer className='footer'></footer>
            <style jsx>
                {`
                    .list-title {
                        font-size: 1.4rem !important;
                    }
                `}
            </style>
        </div>
    );
}

export const getServerSideProps = withAuthServerSideProps();

export default withAuth(Home);
