import React from "react";
import Header from './components/header.js';
import Footer from './components/footer.js';
import { Link, Route, Routes } from "react-router-dom";
import { Home } from './pages/home';
import './App.css';


function App() {
	return (
		<>
	{/*<Header />*/}
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/home" element={<Home />} />
		{/* 
		<Route path="/route2" element={<Component2 />} />
		<Route path="/page1" element={<Page1 />} />
		<Route path="/route3" element={<Component3 />} />
		<Route path="/route4" element={<Component4 />} />
		<Route path="/page2" element={<Page2 />} />*/}
	</Routes>
	{/*<Footer />*/}
		</>
	);
}

export default App;
