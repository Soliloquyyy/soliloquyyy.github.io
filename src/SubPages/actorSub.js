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
function actorSub(){
	return (
		<AbsoluteWrapper>
			<ListWrapper>
				<ContentWrapper>
					<TitleHeaderWrapper>
						Six degrees of Separation
					</TitleHeaderWrapper>
					<HeaderWrapper>
						Introduction
					</HeaderWrapper>
					<BodyWrapper>
						Implementation of a generalized "Six Degrees of Kevin Bacon". It is where we need to input two
						actors/actresses and have to find the shortest sequence of shared movies between them. 
					</BodyWrapper>
					<HeaderWrapper>
						Main
					</HeaderWrapper>
					<BodyWrapper>
						We construct an actor graph and for each node we have its name, movies and year. Then we can connect two nodes
						if they have the same movies. the weight between two actor is determined with the lowest 1 + (2018 - year) since 
						2018 is the max year for this data set. Then with the graph done it is a simple implementation of Dijkstra algorithm.
						
					</BodyWrapper>
				</ContentWrapper>
			</ListWrapper>
		</AbsoluteWrapper>
	)
}

export default actorSub;