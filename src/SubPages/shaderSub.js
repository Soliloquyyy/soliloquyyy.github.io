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

function shaderSub(){
	return (
		<AbsoluteWrapper>
			<ListWrapper>
				<ContentWrapper>
					<TitleHeaderWrapper>
						Shader Program Projects
					</TitleHeaderWrapper>
					<HeaderWrapper>
						Introduction
					</HeaderWrapper>
					<BodyWrapper>
						This section consists of 4 projects that deals with Shader Programming.
						They consists of: <br/>
						Water Wave Shader<br/>
						Dithering with Fragment Shader<br/>
						Mesh Generation with Geometry Shader<br/>
						Post-Processing Shader<br/>
					</BodyWrapper>
					<HeaderWrapper>
						Main
					</HeaderWrapper>
					<BodyWrapper>
						Water Wave Shader: <br/>
						This shader generate water waves using the formula <br/>
						height = amp * cos( 2*pi*( d / lambda – freq*t ) ). <br/>
						and a flat floor mesh that is passed in from a different program.
						This also calculates the normal vector so we can have good lighting for the fragment shader calculations.
						This project allows for more than one wave to be generated thus can result in realistic random-looking waves.
					</BodyWrapper>
					<BodyWrapper>
						<img src = "https://soliloquy.s-ul.eu/UalxdW0m" class="img-fluid mx-auto d-block" width="50%"></img>
					</BodyWrapper>
					<BodyWrapper>
						Dithering with Fragment Shader<br/>
						Explaination of Dithering: https://en.wikipedia.org/wiki/Dither<br/>
						In this project I will be: <br/>
						Dithering to k discretization levels, controlled by up/down arrows.
      					Dithering in grayscale mode or independently dithering each color component.
      					Using random dithering to set color probabilistically<br/>
					</BodyWrapper>
					<BodyWrapper>
						Mesh Generation with Geometry Shader<br/>
						In this shader program I generated scalable bumps floor mesh from a flat floor mesh.
						The geometry shader raised part of the floor to demonstrate the use of geometry shader.
						With the geometry of the original mesh change the normal map need to also be changed to calculate the right
						lighting levels for the generated mesh so that will also be calculated too.<br/>
						https://soliloquy.s-ul.eu/9RKj1ETS
					</BodyWrapper>

					<BodyWrapper>
						Post-Processing Shader<br/>
						Here is a detailed PDF explaining this project: https://soliloquy.s-ul.eu/pso3qC29.
					</BodyWrapper>

				</ContentWrapper>
			</ListWrapper>
		</AbsoluteWrapper>

	)
};

export default shaderSub;