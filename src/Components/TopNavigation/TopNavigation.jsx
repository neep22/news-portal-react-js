import React, { Fragment, useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../../assets/css/custom.css";
import "../../assets/css/bootstrap.min.css";
import Logo from "../../assets/images/logo.png";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const TopNavigation = () => {
    const [scroll, setScroll] = useState({
        mainNavBar: 'mainNavBar',
    });
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScroll({ mainNavBar: 'mainNavBarScroll' });
        } else {
            setScroll({ mainNavBar: 'mainNavBar' });
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const animation = {
        from: {
            position: 'relative',
            top: '-10vw',
        },
        to: {
            top: '0',
            transition: { duration: 1, type: "spring", stiffness: 100, delay: 0.5 },
        },
    };

    return (
        <Fragment>
            <Navbar fixed="top" expand="lg" className={scroll.mainNavBar}>
                <Container fluid={true} className="pb-2">
                    <Navbar.Brand className="navImg">
                        <motion.img
                            src={Logo}
                            alt="logo"
                            variants={animation}
                            initial="from"
                            animate="to"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleMenu} />
                    <Navbar.Collapse id="navbarScroll" className={`${isOpen ? 'show' : ''}`}>
                        <Nav className="navBarMain ml-auto" navbarScroll>
                            <Link
                                to="/"
                                smooth={true}
                                duration={500}
                                className="navMenuListItem"
                                onClick={toggleMenu} // Close menu on click
                            >
                                <motion.span variants={animation} initial="from" animate="to">Home</motion.span>
                            </Link>
                            <Link
                                to="modules"
                                smooth={true}
                                duration={500}
                                className="navMenuListItem"
                                onClick={toggleMenu} // Close menu on click
                            >
                                <motion.span variants={animation} initial="from" animate="to">Modules</motion.span>
                            </Link>
                            <Link
                                to="posts"
                                smooth={true}
                                duration={500}
                                className="navMenuListItem"
                                onClick={toggleMenu} // Close menu on click
                            >
                                <motion.span variants={animation} initial="from" animate="to">Posts</motion.span>
                            </Link>
                            <Link
                                to="article"
                                smooth={true}
                                duration={500}
                                className="navMenuListItem"
                                onClick={toggleMenu} // Close menu on click
                            >
                                <motion.span variants={animation} initial="from" animate="to">Archive</motion.span>
                            </Link>
                            <Link
                                to="footer"
                                smooth={true}
                                duration={500}
                                className="navMenuListItem"
                                onClick={toggleMenu} // Close menu on click
                            >
                                <motion.span variants={animation} initial="from" animate="to">Contact</motion.span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default TopNavigation;
