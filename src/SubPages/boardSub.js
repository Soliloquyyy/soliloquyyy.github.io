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

function boardSub(){
	return(
		<AbsoluteWrapper>
			<ListWrapper>
				<ContentWrapper>
					<TitleHeaderWrapper>
						2048 Game Remake in Java
					</TitleHeaderWrapper>
					<HeaderWrapper>
						Main
					</HeaderWrapper>
					<BodyWrapper>
						A remake of the famous 2048 game using Java. All functionality works and it has different features from the original such as
						being able to have any size nxn board and ends at any desirable score.
					</BodyWrapper>
					<HeaderWrapper>
						Images
					</HeaderWrapper>
					<BodyWrapper>
						<img src = "https://soliloquy.s-ul.eu/wR4qufyu" class="img-fluid mx-auto d-block" width="50%"></img>
						<img src = "https://soliloquy.s-ul.eu/aTl7Zne2" class="img-fluid mx-auto d-block" width="50%"></img>
					</BodyWrapper>
					<HeaderWrapper>
						Closing
					</HeaderWrapper>
					<BodyWrapper>
						Email me if you would like to see the code. I will post jar file here soon.
					</BodyWrapper>
				</ContentWrapper>
			</ListWrapper>
		</AbsoluteWrapper>
	)
};

export default boardSub;
