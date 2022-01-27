import React from "react"
import AboutmeImg from "../../assets/nunsinee-viken-about.jpg"

function AboutSkills() {
	return (
		<div className="col-lg-6 col-sm-12">
			<div className="box-about">
				<img
					src={AboutmeImg}
					alt="nunsinee viken photo"
					className="img-fluid img-thumbnail"
				/>

				<div className="text-about">
					<div>
						<span className="innertext">Nunsinee Viken</span>
					</div>
				</div>
			</div>

			<h2 className="display-6">Skills & Level</h2>
			<h4>Intermediate level</h4>
			<div className="skills-container">
				<div className="card-icon">Html</div>
				<div className="card-icon">CSS</div>
				<div className="card-icon">JavaScript</div>
				<div className="card-icon">Wordpress</div>
				<div className="card-icon">Bootstrap</div>
				<div className="card-icon">Adobe XD</div>
				<div className="card-icon">PhotoShop</div>
			</div>
			<h4>Beginers level</h4>
			<div className="skills-container">
				<div className="card-icon">Node.js</div>
				<div className="card-icon">React</div>
				<div className="card-icon">Illustrator</div>
			</div>

			<a href="/assets/download/cv_nunsinee_viken.pdf" download>
				<h2 className="display-6 downloading">Download Resume</h2>
			</a>
		</div>
	)
}

export default AboutSkills
