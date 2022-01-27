import React from "react"
import HomeImg from "../../assets/inspiration6x4.jpeg"

function HomeImage() {
	return (
		<div class="col-lg-6 col-sm-12">
			<img
				src={HomeImg}
				alt="inspiration"
				class="img-fluid img-thumbnail img-filtered"
			/>
		</div>
	)
}

export default HomeImage
