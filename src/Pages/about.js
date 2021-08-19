import React from 'react';
//import css;
import AbsoluteWrapper from "./AbsoluteWrapper";
import ImageNavWrapper from "./ImageNavWrapper";
import ListWrapper from "./ListWrapper";
import TitleWrapper from "./TitleWrapper";

function About(){
	const flexboxStyle = {
		backgroundColor: "#708090",
		width: "50%",
	};
	const fSize = (window.innerWidth <= 760) ? "100%" : "200%"
	const sty  = {
		fontSize: fSize,
	}
	const fSize2 = window.innerWidth <= 760 ? "50%" : "100%";
	const sty2 = {
		fontSize: fSize2,
	}
	return (
	    	<>
	    	<AbsoluteWrapper>
					<ListWrapper>
						<div className= "position-relative p-2 d-flex flex-column border-dark rounded" style = {flexboxStyle}> 
							<h1 style = {sty} className="text-center mx-auto m-1">
								About
							</h1>
							<p style = {sty2}>
								<ul>
									<li> I am Vietnamese American, fluent in both Vietnamese and English, familiar with Spanish and Japanese.</li>
									<li> The coding language I use the most is C++ and C but I am familiar and comfortable with most other popular languages. </li>
									<li> This website is created using React, React Spring, and Bootstrap.</li>
									<li><a href="https://github.com/Soliloquyyy"> Github <br/> </a></li>
									<li> Email/Contact: qudieu@gmail.com </li>
								</ul>
							</p>
						</div>
					</ListWrapper>
					

			</AbsoluteWrapper>
			</>
	    );
}

export default About;