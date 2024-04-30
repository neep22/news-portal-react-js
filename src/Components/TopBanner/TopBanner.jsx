import React, { Fragment } from 'react'
import {Container, Carousel, Row, Col} from 'react-bootstrap';
import Slider from "../../assets/images/Slider/slider-banner.jpg"
import Slider2 from "../../assets/images/Slider/slider-banner2.jpg"
import Slider3 from "../../assets/images/Slider/slider-banner3.jpg"
import User from "../../assets/images/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments} from '@fortawesome/free-solid-svg-icons'


const TopBanner = () => {
  return (
    <Fragment>
        <Container fluid={true} className='BannerArea p-0' id='/'>
            <Carousel data-bs-theme="light" prevIcon nextIcon>
                <Carousel.Item>
                    <img className="sliderImg d-block w-100" src={Slider} alt="Second slide"/>
                    <Carousel.Caption>
                        <div className="bannerInfo">
                            <a href="" className="bannerLink">LifeStyle</a>
                            <h5 className="bannerTitle">Everything you ever need to know about flowers</h5>
                            <p className="bannerSubTitle">Credibly empower enterprise wide mindshare for excellent "outside the box" thinking. Proactively mesh impactful meta services rather than enterprise results. Professionally generate end-to-end human capital...</p>
                            <Container className="authors pt-2">
                                <Row className='wrap'>
                                    <Col xl={3} lg={4} md={5} sm={5}>
                                        <div className="authorSection d-flex align-items-center ml-0">
                                            <img className="userImg" src={User} alt="user"/>
                                            <h6 className="authorTitle">Lisa Scholfeild</h6>
                                        </div>
                                    </Col>
                                    <Col xl={9} lg={8} md={7} sm={7}>
                                        <div className="authorComment d-flex align-items-center">
                                            <p className="comment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                            <h6 className="authorTitle">4 comments</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="sliderImg d-block w-100" src={Slider2} alt="Second slide"/>
                    <Carousel.Caption>
                        <div className="bannerInfo">
                            <a href="" className="bannerLink">Food & Drinks</a>
                            <h5 className="bannerTitle">Coffee and lemons don’t go together that well</h5>
                            <p className="bannerSubTitle">Monotonectally predominate emerging deliverables without holistic information. Dynamically embrace cross unit quality vectors before innovative initiatives. Dramatically maintain global relationships for...</p>
                            <Container className="authors pt-2">
                                <Row className='wrap'>
                                    <Col xl={3} lg={4} md={5} sm={5}>
                                        <div className="authorSection d-flex align-items-center ml-0">
                                            <img className="userImg" src={User} alt="user"/>
                                            <h6 className="authorTitle">Lisa Scholfeild</h6>
                                        </div>
                                    </Col>
                                    <Col xl={9} lg={8} md={7} sm={7}>
                                        <div className="authorComment d-flex align-items-center">
                                            <p className="comment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                            <h6 className="authorTitle">4 comments</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="sliderImg d-block w-100" src={Slider3} alt="Second slide"/>
                    <Carousel.Caption>
                        <div className="bannerInfo">
                            <a href="" className="bannerLink">Food & Drinks</a>
                            <h5 className="bannerTitle">Did you know that plants actually have a secret life?</h5>
                            <p className="bannerSubTitle">Authoritatively negotiate resource leveling experiences without prospective best practices. Holisticly engineer timely portals and holistic potentialities. Credibly negotiate high payoff functionalities...</p>
                            <Container className="authors pt-2">
                                <Row className='wrap'>
                                    <Col xl={3} lg={4} md={5} sm={6}>
                                        <div className="authorSection d-flex align-items-center ml-0">
                                            <img className="userImg" src={User} alt="user"/>
                                            <h6 className="authorTitle">Lisa Scholfeild</h6>
                                        </div>
                                    </Col>
                                    <Col xl={9} lg={8} md={7} sm={6}>
                                        <div className="authorComment d-flex align-items-center">
                                            <p className="comment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                            <h6 className="authorTitle">4 comments</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </Fragment>
  )
}

export default TopBanner