import React from "react"
import "./sass/style.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NavMenu from "./components/navbar/NavMenu"
import Footer from "./components/layout/Footer"

function App() {
	return (
		<Router>
			<div className="wrapper">
				<NavMenu />
				<hr />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
