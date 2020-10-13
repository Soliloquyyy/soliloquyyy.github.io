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

function liveSub(){
	return(
		<AbsoluteWrapper>
			<ListWrapper>
				<ContentWrapper>
					<TitleHeaderWrapper>
						Game of Life recreation in C and ARM.
					</TitleHeaderWrapper>
					<HeaderWrapper>
						Introduction
					</HeaderWrapper>
					<BodyWrapper>
						This project is a recreation of the Game of Life with a mix of C and ARM assembly language as practice.
						Basically all the logics such as updating the board is written in ARM but all the interface is written in C.
						This is a simulation on command line.
					</BodyWrapper>
					<HeaderWrapper>
						Main
					</HeaderWrapper>
					<BodyWrapper>
						This is simulation has the same rule set as John Conway's Game of Life: <br/>
						Any live cell with fewer than two live neighbours dies, as if by underpopulation.<br/>
						Any live cell with two or three live neighbours lives on to the next generation.<br/>
						Any live cell with more than three live neighbours dies, as if by overpopulation.<br/>
						Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.<br/>
						Demo: (to be added).
					</BodyWrapper>
				</ContentWrapper>
			</ListWrapper>
		</AbsoluteWrapper>
	);
};

export default liveSub;