import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from "../../assets/images/footer-logo.png"
import FooterImg from "../../assets/images/footerimg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faPinterestP, faTwitter,faVine } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <Fragment>
        <Container fluid={true} className="footerArea pt-80" id='footer'>
            <Row>
                <Col xl={3} lg={6} md={6} sm={12}>
                    <div className="footerLogo">
                        <img src={FooterLogo} alt="" />
                        <p className="footer-title">Gridlove is an attractive WordPress theme based on a grid framework. With many layouts to choose from you’ll have your website running in no time.</p>
                        <div className="brandsIcon d-flex">
                            <a href='' className="icon" style={{background:"#4267B2",}}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href='' className="icon" style={{background:"#1DA1F2",}}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href='' className="icon" style={{background:"#E60023",}}>
                                <FontAwesomeIcon icon={faPinterestP} />
                            </a>
                            <a href='' className="icon" style={{background:"#00B488",}}>
                                <FontAwesomeIcon icon={faVine}/>
                            </a>
                            
                        </div>
                    </div>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12}>
                    <div className="footerForm">
                        <h5 className="footerFormTitle">Email Newsletter</h5>
                        <p className="footerFormSubTitle">Subscribe to receive inspiration, news, and ideas in your inbox.</p>
                        <form action="">
                            <input type="text" placeholder="Enter Your Email Address" />
                            <button className="submit" type="submit">Submit</button>
                        </form>
                    </div>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12}>
                    <div className="footerList">
                        <h5 className="footerFormTitle">Help & Support</h5>
                        <ul className="list">
                            <li className="listMainTitle">
                                <a href="" className="listTitle">Support</a>
                            </li>
                            <li className="listMainTitle"> 
                                <a href="" className="listTitle">Terms of use</a>
                            </li>
                            <li className="listMainTitle"> 
                                <a href="" className="listTitle">Community guidelines</a>
                            </li>
                            <li className="listMainTitle"> 
                                <a href="" className="listTitle">About GridLoves</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12}>
                    <div className="footerImg">
                        <img src={FooterImg} alt="" /> 
                    </div>
                </Col>
            </Row>
            <div className="copyright">
                <p className="copyrightTitle">&copy; All Copyright 2023 by GridLoves</p>
            </div>
        </Container>
    </Fragment>
  )
}

export default Footer