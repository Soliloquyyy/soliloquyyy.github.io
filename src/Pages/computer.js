import React from 'react';
import AbsoluteWrapper from "./AbsoluteWrapper";
import TitleWrapper from "./TitleWrapper";
import ImageNavWrapper from "./ImageNavWrapper";
import ListWrapper from "./ListWrapper";

//import reactspring and navlink
import { useSpring, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';


function Computer() {
	const flexboxStyle = {
		backgroundColor: "#708090",
	};
	const link1 = "computer/1";
	const link2 = "computer/2";
	const link3 = "computer/3";
	const link4 = "computer/4";
	const link5 = "computer/5";
	const link6 = "computer/6";
	const link7 = "computer/7";
	const link8 = "computer/8";
	const link9 = "computer/9";
	const des1 = "A music visualizer that uses any addressable rgb strip and a micro controler such as the arduino.This project aims to process audio signal without having to use Stereo Mix(More info on why inside).It uses WASPAI to capture playback audio to process with FFT.";
	const des2 = "Implementation of Distributed Ray Tracing on an existing CPU ray tracing project and creation of Bezier Patches. Utilized OpenGL, KDTree Bounding boxes, Bezier Patches, Ray Tracing";
	const des3 = "Various Shader Project that aims to show shader mastery. Includes: Post-Processing Shader, Fragment Water Wave Shader, Geometry Shader, and many more. Used OpenGL.";
	const des4 = "A Multipurpose Bot to help manage Discord Community and also to bring entertainment for the users. Include feature such as automatic role assignment upon joining, Youtube API search calls, Reddit Post Tracker, Playable Chat Games and many more";
	const des5 = "A replica of the game '2048'. Implemented in JavaFX. The project aims to showcase Java familiarity but also GUI skills. This also include feature to end game at any score as oppose to the original 2048";
	const des6 = "An full implementation of a KDTree with BST using C++ template. It is implemented as 2DTree but since it is using C++ template it can easily be modify to work with any dimension by passing in the comparision function";
	const des7 = "Implementation of Game of Life in ARM as the logic and C as the interface to user. This project aims to improve my understanding of ARM and Assembly languages and how they work behind the hood";
	const des8 = "A more generalized version of Six Degree of Kevin Bacon. This version aims to find ind the shortest sequence of shared movies between two actors from a given list. Utilized: Graph, Pathfinding";
	const des9 = "A probabilistic document generator that takes input of an existing text and generate a document based on the probablity of any words that goes after it. The Autocomplete part is a simple implementation of a Multi-Way Trie that predict the ending of the inputted letters";


    return (
    	<AbsoluteWrapper>
				<ListWrapper>
				{/*
					<ImageNavWrapper link={link1}> 
						Image
					</ImageNavWrapper> 
					*/
				}
					<TitleWrapper link={link1}>
						RGB Lightstrip Music Visualizer Without Using Stereo Mix
						{des1}
					</TitleWrapper>
				</ListWrapper>
				

				<ListWrapper>

					<TitleWrapper link={link2}>
						Distributed Ray Tracing
						{des2}
					</TitleWrapper>
				</ListWrapper>


				<ListWrapper>

					<TitleWrapper link={link3}>
						Shader Program Projects
						{des3}
					</TitleWrapper>
				</ListWrapper>


				<ListWrapper>

					<TitleWrapper link={link4}>
						ThoBot: Multipurpose Discord Bot 
						{des4}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>

					<TitleWrapper link={link5}>
						2048 Remake with JavaFX
						{des5}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>

					<TitleWrapper link={link6}>
						KDTree(2D) implementation Using BST and C++ Template
						{des6}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>

					<TitleWrapper link={link7}>
						Game of Life simulation on Command Lines using ARM and C
						{des7}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>

					<TitleWrapper link={link8}>
						Six Degree of Separation Finder
						{des8}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>

					<TitleWrapper link={link9}>
						Document Generator and Autocomplete words
						{des9}
					</TitleWrapper>
				</ListWrapper>

		</AbsoluteWrapper>
    );
};

export default Computer;