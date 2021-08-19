import React from 'react';
//import css;
import './home.css';
import AbsoluteWrapper from "./AbsoluteWrapper";
import ImageNavWrapper from "./ImageNavWrapper";
import ListWrapper from "./ListWrapper";
import TitleWrapper from "./TitleWrapper";

//import reactspring
import { useSpring, animated } from 'react-spring';

function Home() {
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
							Welcome to my page
						</h1>
						<p style = {sty2}>
							Hello, my name is Quy. I am a graduate from UCSD that majored in Mathematics and Computer Science.
							I love developing software that help me learn a particular subject. You might see many different projects that
							cater to different subjects in computer science here.  Please checkout my porfolio using the navigation bar.<br/>
							I also love photography and do amature photography in my free times. I will slowly upload my porfolio for it here soon.<br/>
							PS: I am still updating this website regularly.
						</p>
					</div>
				</ListWrapper>
				

		</AbsoluteWrapper>
		</>
    );
};

export default Home;