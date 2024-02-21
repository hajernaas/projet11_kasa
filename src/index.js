import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./sass/main.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/accommodation/:id" element={<Accommodation />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
