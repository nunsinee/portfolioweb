import React from "react"
import HomeDetail from "../components/home/HomeDetail"
import HomeImage from "../components/home/HomeImage"
import Container from "react-bootstrap/Container"

function Home() {
	return (
		<>
			<Container className="content">
				<div className="row">
					<HomeDetail />
					<HomeImage />
				</div>
			</Container>
		</>
	)
}

export default Home
