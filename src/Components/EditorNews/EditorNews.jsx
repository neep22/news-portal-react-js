import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Post from "../../assets/images/popular7.jpg"
import User from "../../assets/images/user.jpg"
import Post2 from "../../assets/images/posts.jpg"
import Post3 from "../../assets/images/posts-1.jpg"
import Post4 from "../../assets/images/posts-2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments} from '@fortawesome/free-solid-svg-icons'

const EditorNews = () => {
  return (
    <Fragment>
        <Container className=" Editor pt-80 pb-80" id='modules'>
            <Row>
                <Col>
                    <div className="sectionTitle pt-40">
                        <h5 className="Title text-start">Modules</h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={12} sm={12}>
                    <div className="box d-flex">
                        <div className="boxImg">
                            <img src={Post} alt="" />
                        </div>
                        <div className="boxInfo text-start ">
                            <a href="" className="bannerLink">Entertainments</a>
                            <h5 className="boxInfoTitle pt-3">Are rock concerts really coming back into fashion?</h5>
                            <p className="boxInfoSubTitle pt-3 pb-2">Monotonectally pursue backward-compatible ideas without empowered imperatives. Interactively predominate low-risk high-yield ROI rather than adaptive e-tailers....</p>
                            <Container className="authors">
                                <Row className='wrap'>
                                    <Col xl={5} lg={7} md={6} sm={8}>
                                        <div className="authorSection d-flex align-items-center ml-0 pt-4">
                                            <img className="userImg" src={User} alt="user"/>
                                            <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                        </div>
                                    </Col>
                                    <Col xl={7} lg={5} md={6} sm={4}>
                                        <div className="authorComment d-flex align-items-center pt-4 authorize">
                                            <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                            <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <div className="img">
                        <img src={Post2} alt="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <div className="editorBox mt-5">
                        <img src={Post3} alt="" />
                        <div className="editorBoxOverlay editor">
                            <a href="" className="bannerLink">Technology</a>
                            <h5 className="editorInfoTitle pt-3 pb-1">The world needs true geniuses now more than ever</h5>
                            <p className="bannerSubTitle">Credibly empower enterprise wide mindshare for excellent "outside the box" thinking. Proactively mesh .....</p>
                            <Container className="authors">
                                <Row className='wrap'>
                                    <Col lg={6} md={7} sm={5}>
                                        <div className="authorSection d-flex align-items-center ml-0 pt-3 pb-2">
                                            <img className="userImg" src={User} alt="user"/>
                                            <h6 className="authorTitle authorBoxTitle text-white">Lisa Scholfeild</h6>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={8} sm={7}>
                                        <div className="authorComment d-flex align-items-center ml-0 pt-3 authorize">
                                            <p className="comment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                            <h6 className="authorTitle">4 comments</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <div className="editorBox mt-5 single">
                        <img src={Post4} alt="" />
                        <div className="editorBoxOverlay">
                            <a href="" className="bannerLink">Technology</a>
                        </div>
                        <Container fluid={true} className="author ">
                            <h5 className="editorInfoTitles pb-3">Are rock concerts really coming back into fashion?</h5>
                            <Row className='wrap'>
                                <Col lg={6} md={7} sm={5}>
                                    <div className="authorSection d-flex align-items-center ml-0 pb-2">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={8}>
                                    <div className="authorComment d-flex align-items-center ml-0 pt-3 authorize">
                                        <p className="comment authorBoxComment"><FontAwesomeIcon className="commentIcon" icon={faComments} /></p>
                                        <h6 className="authorTitle authorBoxTitle">4 comments</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className='box-info'>
                    <div className="boxInfo text-start mt-5">
                        <a href="" className="bannerLink">Entertainments</a>
                        <h5 className="boxInfoTitle pt-3">Are rock concerts really coming back into fashion?</h5>
                        <p className="boxInfoSubTitle pt-3 pb-2">Monotonectally pursue backward-compatible ideas without empowered imperatives. Interactively predominate low-risk high-yield ROI rather than adaptive e-tailers....</p>
                        <Container className="authors">
                            <Row className='wrap'>
                                <Col lg={6} md={7} sm={5}>
                                    <div className="authorSection d-flex align-items-center ml-0 pt-3 pb-2">
                                        <img className="userImg" src={User} alt="user"/>
                                        <h6 className="authorTitle authorBoxTitle">Lisa Scholfeild</h6>
                                    </div>
                                </Col>
                                <Col lg={6} md={5} sm={7}>
                                    <div className="authorComment d-flex align-items-center pt-3 pb-2 authorize">
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
    </Fragment>
  )
}

export default EditorNews