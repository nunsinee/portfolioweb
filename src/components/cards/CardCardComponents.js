import React from "react"
import Img01 from "../../assets/projects_img/alittlegreenery-website.jpg"
import Img02 from "../../assets/projects_img/community-science-museum.jpeg"
import Img03 from "../../assets/projects_img/lightingHouse.jpeg"
import Img04 from "../../assets/projects_img/rainydays.jpeg"
import Img05 from "../../assets/projects_img/krabistaycation.jpeg"
import Img06 from "../../assets/projects_img/flowerpower.jpeg"

const CardComponents = (props) => {
	return (
		<>
			<div class="col-xl-4 col-lg-6 col-sm-12">
				<div class="card">
					<div class="card-body">
						<div class="title-in-card">
							<div class="number">1</div>
							<h6 class="card-title">A Little Greenery</h6>
						</div>
						<a
							href="https://nunsinee-sp2.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Img01}
								class="card-img-top proj-image"
								alt="a little greennery web site"
							/>
						</a>

						<h6 class="card-subtitle mb-2 mt-2 text-muted">
							Strapi API, Heroku,JS Cloudinary,Bootstrap, Sass,
							Webresponsive
						</h6>

						<div class="weblink-container">
							<a
								href="https://nunsinee-sp2.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								type="button"
								class="btn btn-weblink"
							>
								View website
							</a>
							<a
								href="https://github.com/nunsinee/semester-project.git"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div class="icon-web-category icon-github-link"></div>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xl-4 col-lg-6 col-sm-12">
				<div class="projects-container">
					<div class="card">
						<div class="card-body">
							<div class="title-in-card">
								<div class="number">2</div>
								<h6 class="card-title">
									Community Science Museum
								</h6>
							</div>
							<a
								href="https://semester-project01.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={Img02}
									class="card-img-top proj-image"
									alt="comunity science museum"
								/>
							</a>

							<h6 class="card-subtitle mb-2 mt-2 text-muted">
								Html, CSS, JavaScript,Web responsive, Validation
								Contact Form
							</h6>

							<div class="weblink-container">
								<a
									href="https://semester-project01.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
									type="button"
									class="btn btn-weblink"
								>
									View website
								</a>
								<a
									href="https://github.com/nunsinee/semester01.git"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div class="icon-web-category icon-github-link"></div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xl-4 col-lg-6 col-sm-12">
				<div class="projects-container">
					<div class="card">
						<div class="card-body">
							<div class="title-in-card">
								<div class="number">3</div>
								<h6 class="card-title">Lighting House</h6>
							</div>
							<a
								href="https://nunsinee-viken-ma3-design02.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={Img03}
									class="card-img-top proj-image"
									alt="lighting house sell lamp and lighting"
								/>
							</a>

							<h6 class="card-subtitle mb-2 mt-2 text-muted">
								Icons made by Illustrator, Image CSS JS,
								Bootstrap, E-commerce web design
							</h6>

							<div class="weblink-container">
								<a
									href="https://nunsinee-viken-ma3-design02.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
									type="button"
									class="btn btn-weblink"
								>
									View website
								</a>
								<a
									href="https://github.com/nunsinee/nunsinee-viken-js1-ma3.git"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div class="icon-web-category icon-github-link"></div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xl-4 col-lg-6 col-sm-12">
				<div class="projects-container">
					<div class="card">
						<div class="card-body">
							<div class="title-in-card">
								<div class="number">4</div>
								<h6 class="card-title">
									Rainydays Rain Jackets
								</h6>
							</div>
							<a
								href="https://rainnydays-nunsinee.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={Img04}
									class="card-img-top proj-image"
									alt="rainydays rain jacket"
								/>
							</a>

							<h6 class="card-subtitle mb-2 mt-2 text-muted">
								Html, CSS, Image slider, Carousel, E-commerce
								web design, Vanilla JS
							</h6>

							<div class="weblink-container">
								<a
									href="https://rainnydays-nunsinee.netlify.app/"
									type="button"
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-weblink"
								>
									View website
								</a>
								<a
									href="https://github.com/nunsinee/rainydays.git"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div class="icon-web-category icon-github-link"></div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xl-4 col-lg-6 col-sm-12">
				<div class="projects-container">
					<div class="card">
						<div class="card-body">
							<div class="title-in-card">
								<div class="number">5</div>
								<h6 class="card-title">
									Krabistaycation Travel Blog
								</h6>
							</div>
							<a
								href="https://krabistaycation-update.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={Img05}
									class="card-img-top proj-image"
									alt="Krabi staycation travel blog"
								/>
							</a>

							<h6 class="card-subtitle mb-2 mt-2 text-muted">
								API, Headless CMS, Blog, Wordpress, JavaScript
							</h6>

							<div class="weblink-container">
								<a
									href="https://krabistaycation-update.netlify.app/"
									type="button"
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-weblink"
								>
									View website
								</a>
								<a
									href="https://github.com/nunsinee/krabistaycation-update.git"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div class="icon-web-category icon-github-link"></div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xl-4 col-lg-6 col-sm-12">
				<div class="projects-container">
					<div class="card">
						<div class="card-body">
							<div class="title-in-card">
								<div class="number">6</div>
								<h6 class="card-title project-title">
									Flower Lover
								</h6>
							</div>
							<a
								href="https://www.flowerlover.casa/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={Img06}
									class="card-img-top proj-image"
									alt="flower shop"
								/>
							</a>

							<h6 class="card-subtitle mb-2 mt-2 text-muted">
								API, Custom WordPress Theme
							</h6>

							<div class="weblink-container">
								<a
									href="https://www.flowerlover.casa/"
									target="_blank"
									rel="noopener noreferrer"
									type="button"
									class="btn btn-weblink"
								>
									View website
								</a>
								<a
									href="https://github.com/nunsinee/flowerpower-restapi.git"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div class="icon-web-category icon-github-link"></div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardComponents
