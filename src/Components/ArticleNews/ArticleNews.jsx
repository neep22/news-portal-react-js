import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Post7 from "../../assets/images/posts-5.jpg"
import Post8 from "../../assets/images/posts-6.jpg"
import Post9 from "../../assets/images/posts-7.jpg"
import Post10 from "../../assets/images/posts-8.jpg"
import Post11 from "../../assets/images/posts-9.jpg"
import Post12 from "../../assets/images/posts-10.jpg"
import Post13 from "../../assets/images/posts-11.jpg"
import Post14 from "../../assets/images/posts-12.jpg"
import Post15 from "../../assets/images/posts-13.jpg"
import User from "../../assets/images/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments} from '@fortawesome/free-solid-svg-icons'

const ArticleNews = () => {
  return (
    <Fragment>
        <Container className="pt-40" id='article'>
            <Row>
                <Col>
                    <div className="sectionTitle pt-80 pb-4">
                        <h5 className="Title text-start">The Week's News</h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <div className="editorBox mb-4">
                        <img src={Post7} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Travel</a>
                        </div>
                        <Container fluid={true} className="author">
                            <h5 className="editorInfoTitles pb-3">Australia is the ultimate place in the world for kangaroo...</h5>
                            <Row className='wrap'>
                                <Col xl={5} lg={7} md={6} sm={4}>
                                    <div className="authorSection d-flex align-items-center ml-0">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col xl={7} lg={5} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="editorBox single-boxes mb-4">
                        <img src={Post8} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Travel</a>
                        </div>
                        <Container fluid={true} className="author">
                            <h5 className="editorInfoTitles pb-3">Australia is the ultimate place in the world for kangaroo...</h5>
                            <Row className='wrap'>
                                <Col xl={5} lg={7} md={6} sm={4}>
                                    <div className="authorSection d-flex align-items-center ml-0">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col xl={7} lg={5} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="editorBox single-boxes mb-4">
                        <img src={Post9} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Travel</a>
                        </div>
                        <Container fluid={true} className="author">
                            <h5 className="editorInfoTitles pb-3">Australia is the ultimate place in the world for kangaroo...</h5>
                            <Row className='wrap'>
                                <Col xl={5} lg={7} md={6} sm={4}>
                                    <div className="authorSection d-flex align-items-center ml-0">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col xl={7} lg={5} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="editorBox single-boxes mt-200 mb-4">
                        <img src={Post10} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Travel</a>
                        </div>
                        <Container fluid={true} className="author">
                            <h5 className="editorInfoTitles pb-3">Australia is the ultimate place in the world for kangaroo...</h5>
                            <Row className='wrap'> 
                                <Col xl={5} lg={7} md={6} sm={4}>
                                    <div className="authorSection d-flex align-items-center ml-0">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col xl={7} lg={5} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="editorBox single-boxes mt-200 mb-4">
                        <img src={Post11} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Travel</a>
                        </div>
                        <Container fluid={true} className="author">
                            <h5 className="editorInfoTitles pb-3">Australia is the ultimate place in the world for kangaroo...</h5>
                            <Row className='wrap'>
                                <Col xl={5} lg={7} md={6} sm={4}>
                                    <div className="authorSection d-flex align-items-center ml-0">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col xl={7} lg={5} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="editorBox single-boxes mt-200 mb-4">
                        <img src={Post12} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Travel</a>
                        </div>
                        <Container fluid={true} className="author">
                            <h5 className="editorInfoTitles pb-3">Australia is the ultimate place in the world for kangaroo...</h5>
                            <Row className='wrap'>
                                <Col xl={5} lg={7} md={6} sm={4}>
                                    <div className="authorSection d-flex align-items-center ml-0">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col xl={7} lg={5} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="editorBox single-boxes mt-200">
                        <img src={Post13} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Travel</a>
                        </div>
                        <Container fluid={true} className="author">
                            <h5 className="editorInfoTitles pb-3">Australia is the ultimate place in the world for kangaroo...</h5>
                            <Row className='wrap'>
                                <Col xl={5} lg={7} md={6} sm={4}>
                                    <div className="authorSection d-flex align-items-center ml-0">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col xl={7} lg={5} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="editorBox single-box mt-200">
                        <img src={Post14} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Travel</a>
                        </div>
                        <Container fluid={true} className="author">
                            <h5 className="editorInfoTitles pb-3">Australia is the ultimate place in the world for kangaroo...</h5>
                            <Row className='wrap'>
                                <Col xl={5} lg={7} md={6} sm={4}>
                                    <div className="authorSection d-flex align-items-center ml-0">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col xl={7} lg={5} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className="editorBox single-boxes mt-200 ">
                        <img src={Post15} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Travel</a>
                        </div>
                        <Container fluid={true} className="author">
                            <h5 className="editorInfoTitles pb-3">Australia is the ultimate place in the world for kangaroo...</h5>
                            <Row className='wrap'>
                                <Col xl={5} lg={7} md={6} sm={4}>
                                    <div className="authorSection d-flex align-items-center ml-0">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col xl={7} lg={5} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="mt-200">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="Button mt-4 mb-5">
                        <a className="ButtonTitle" href="">See More</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default ArticleNews