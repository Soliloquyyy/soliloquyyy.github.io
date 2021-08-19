import React from 'react';
import AbsoluteWrapper from '../Pages/AbsoluteWrapper';
import ListWrapper from '../Pages/ListWrapper';
import ContentWrapper from '../Pages/ContentWrapper';
import TitleHeaderWrapper from "../Pages/TitleHeaderWrapper";
import HeaderWrapper from "../Pages/HeaderWrapper";
import BodyWrapper from "../Pages/BodyWrapper";

//import reactspring and navlink
import { useSpring, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';

function raySub(){
	return(
		<AbsoluteWrapper>
			<ListWrapper>
				<ContentWrapper>
					<TitleHeaderWrapper>	
						Distributed Ray Tracing
					</TitleHeaderWrapper>
					<HeaderWrapper>
						Introduction
					</HeaderWrapper>
					<BodyWrapper>
						This is an implementation of distributed ray tracing with Bezier Patches using an existing CPU ray tracing project.
						In this project I will implement ray casting stochastic jitterring Anti-aliasing, Soft Shadows and Depth of Field.
						I will include the executable in the future.
					</BodyWrapper>
					<HeaderWrapper>
						Anti-aliasing
					</HeaderWrapper>
					<BodyWrapper>
						It is implemented by jittered, stochastic super-sampling. Meaning, we cast a ray from the eye position into the scene for each pixels.
						We then would take the nearby subpixels(usually in an nxn box) and average them and use it as a result of the current pixel.
						Thus ultimately soften the edges and resulting in smoother edges.
					</BodyWrapper>
					<HeaderWrapper>
						Soft Shadows
					</HeaderWrapper>
					<BodyWrapper>
						This is implemented by looping through every pixels and at every light source(not a single point meaning it is an area of light source).
						Then we pick a jittered, stochastic position on that light(same implementation as Anti-aliasing except not on subpixels levels).
						Then we cast a shadow feeler, a ray toward a light with displacement calculated from the stochastic position to see if it is obstructed.
						Then we would calculated the amount of light that hit the current pixel like normal. This will result in softer shadow as sometime the shadowfeeler would
						return false as it is being displaced to another position near the edge of the shadow. 
						Noted that there is a more accurate way to implement soft shadow but it would take a significant more time since this is a cpu renderer.
					</BodyWrapper>
					<HeaderWrapper>
						Depth of Field
					</HeaderWrapper>
					<BodyWrapper>
						Here we stochastically jittter the eyes(camera) position to simulate our cone of vision so that it is wider to create a sense of depth.
						With our eyes bigger we can cast ray to each pixel differently, and if the position is in focus every stochastic eyes position ray would return
						the same color value for all of the same distance. Otherwise it will look very random and out of focus.
					</BodyWrapper>
					<HeaderWrapper>
						PDF with demonstrations	
					</HeaderWrapper>
					<BodyWrapper >
						<a href="https://soliloquy.s-ul.eu/UQhDqQ1L" target="_blank"> https://soliloquy.s-ul.eu/UQhDqQ1L </a>
					</BodyWrapper>

					<HeaderWrapper>
						Code and EXE
					</HeaderWrapper>
					<BodyWrapper>
						Please email me for the code and EXE to be posted soon.
					</BodyWrapper>
				</ContentWrapper>
			</ListWrapper>
		</AbsoluteWrapper>







	)
}

export default raySub;