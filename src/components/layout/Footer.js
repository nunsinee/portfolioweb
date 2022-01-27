import React from "react"
import Container from "react-bootstrap/Container"

function Footer() {
	return (
		<div class="footer">
			<Container className="foot">
				<div className="col-lg-12">
					<div className="icons-container">
						<a
							href="https://github.com/nunsinee"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="icon-category icon-github"></div>
						</a>
						<a
							href="https://www.linkedin.com/in/nunsinee/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="icon-category icon-linkedin"></div>
						</a>
						<a
							href="https://twitter.com/MimInNorway"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="icon-category icon-twitter"></div>
						</a>
						<a
							href="https://www.facebook.com/Krabi-Islander-106733358584511"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="icon-category icon-facebook"></div>
						</a>
					</div>
				</div>
				<div className="col-lg-12 mb-2">Nunsinee@gmail.com</div>
				<div className="col-lg-12">
					<div className="copyright">
						Copyright © 2022 Nunsinee-Viken. All rights reserved.
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Footer
