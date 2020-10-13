import React from 'react';
//import css;
import './home.css';
import AbsoluteWrapper from "./AbsoluteWrapper";

//import reactspring
import { useSpring, animated } from 'react-spring';

function Home() {
    return (
    	<>
    	<AbsoluteWrapper>
				<div className="text-center p-2"> <h1> Welcome to my page </h1>
					<p className="text-center p-2"> Click the navigation bar to explore this website </p>
				</div>
				

		</AbsoluteWrapper>
		</>
    );
};

export default Home;