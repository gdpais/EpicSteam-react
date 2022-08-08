import React, { useState, useEffect } from 'react';
import './Header.css';
import '../assets/style/hoverEffects.css';
import { Link } from 'react-router-dom';
import { Modal, Navbar, Nav, Container } from 'react-bootstrap';
import SignUp from './authentication/SignUp';
import SignIn from './authentication/SignIn';
import logo from '../assets/images/icon.png';

/**
 * Header Component is composed by a navbar and the authentication modal
 * It handles basic website navigation
 * @returns {Element} Header navbar + Authentication modal
 */
export default function Header() {
	const [modalShow, setModalShow] = useState(false);
	const [modalContent, setModalContent] = useState(<></>);
	const [navbarBg, setNavbarBg] = useState('navbar-container active');

	/**
	 * Set a listener for scroll event
	 */
	useEffect(() => {
		window.addEventListener('scroll', changeNavBg);
	}, []);

	/**
	 * Change navbar background
	 */
	const changeNavBg = () => {
		if (window.scrollY > 400) setNavbarBg('navbar-container');
		else setNavbarBg('navbar-container active');
	};

	/**
	 * Show the authentication modal with sign up content
	 */
	const handleSignUp = () => {
		setModalContent(<SignUp />);
		setModalShow(true);
	};

	/**
	 * Show the authentication modal with sign in content
	 */
	const handleSignIn = () => {
		setModalContent(<SignIn />);
		setModalShow(true);
	};

	/**
	 * Handle authentication modal hide
	 */
	const handleModalHide = () => {
		setModalShow(false);
		setModalContent(<></>);
	};

	//TODO: Adicionar backoffice/paginas escondidas para utilizadores com roles
	return (
		<>
			<Navbar
				className={navbarBg}
				collapseOnSelect
				expand="lg"
				sticky="top"
				variant="dark"
			>
				<Container>
					<Navbar.Brand>
						<Link to="/">
							<img className="navbar-logo" src={logo} alt="Logo" />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as="div">
								<Link className="navbar-link" to="/">
									Home
								</Link>
							</Nav.Link>
							<Nav.Link as="div">
								<Link className="navbar-link" to="/browse">
									Browse
								</Link>
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link
								as="div"
								className="auth-btn hvr-grow hvr-overline-from-center"
								onClick={handleSignUp}
							>
								SignUp
							</Nav.Link>
							<div className="divider"></div>
							<Nav.Link
								as="div"
								className="auth-btn hvr-grow hvr-overline-from-center"
								onClick={handleSignIn}
							>
								SignIn
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Modal className="my-modal" show={modalShow} onHide={handleModalHide}>
				{modalContent}
			</Modal>
		</>
	);
}