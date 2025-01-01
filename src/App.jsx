import React, { useEffect } from "react";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ReactGA from 'react-ga4';
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home.jsx';
import { Resources } from './pages/resources.jsx';
import { Contact } from './pages/contact.jsx';
import { Services } from './pages/services.jsx';
import { Construction } from './pages/construction.jsx';
import ScrollToTop from './components/scrollTop';
import './App.css';

function App() {
	useEffect(() => {
		ReactGA.initialize('G-YC39W47NK3');
		ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "App.jsx" });
	})

	return (
		<>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
		{/*<Construction />*/}
		<Header />
		<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<Services />} />
			</Routes>
		<Footer />
		</>
	);
}
export default App;
