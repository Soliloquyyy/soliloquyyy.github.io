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
	const link1 = "/computer/1";
	const link2 = "/computer/2";
	const link3 = "/computer/3";
	const link4 = "/computer/4";
	const link5 = "/computer/5";
	const link6 = "/computer/6";
	const link7 = "/computer/7";
	const link8 = "/computer/8";
	const link9 = "/computer/9";
	const des1 = "A music visualizer that uses any addressable rgb strip and a micro controler such as the arduino.This project aims to process audio signal without having to use Stereo Mix(More info on why inside).It uses WASPAI to capture playback audio to process with FFT.";

    return (
    	<AbsoluteWrapper>
				<ListWrapper>
					<ImageNavWrapper link={link1}> 
						Image
					</ImageNavWrapper> 
					
					<TitleWrapper link={link1}>
						RGB Lightstrip Music Visualizer Without Using Stereo Mix
						{des1}
					</TitleWrapper>
				</ListWrapper>
				

				<ListWrapper>
					<ImageNavWrapper link={link2}> 
						Image
					</ImageNavWrapper> 
					<TitleWrapper link={link2}>
						Distributed Ray Tracing
						{des1}
					</TitleWrapper>
				</ListWrapper>


				<ListWrapper>
					<ImageNavWrapper link={link3}> 
						Image
					</ImageNavWrapper>  
					<TitleWrapper link={link3}>
						Shader Program Projects
						{des1}
					</TitleWrapper>
				</ListWrapper>


				<ListWrapper>
					<ImageNavWrapper link={link4}> 
						Image
					</ImageNavWrapper>   
					<TitleWrapper link={link4}>
						ThoBot: Multipurpose Discord Bot 
						{des1}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>
					<ImageNavWrapper link={link5}> 
						Image
					</ImageNavWrapper>   
					<TitleWrapper link={link5}>
						2048 Remake with JavaFX
						{des1}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>
					<ImageNavWrapper link={link6}> 
						Image
					</ImageNavWrapper>   
					<TitleWrapper link={link6}>
						KDTree(2D) implementation Using BST and C++ Template
						{des1}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>
					<ImageNavWrapper link={link7}> 
						Image
					</ImageNavWrapper>   
					<TitleWrapper link={link7}>
						Game of Life simulation on Command Lines using ARM and C
						{des1}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>
					<ImageNavWrapper link={link8}> 
						Image
					</ImageNavWrapper>   
					<TitleWrapper link={link8}>
						Six Degree of Separation Finder
						{des1}
					</TitleWrapper>
				</ListWrapper>

				<ListWrapper>
					<ImageNavWrapper link={link9}> 
						Image
					</ImageNavWrapper>   
					<TitleWrapper link={link9}>
						Document Generator and Autocomplete words
						{des1}
					</TitleWrapper>
				</ListWrapper>

		</AbsoluteWrapper>
    );
};

export default Computer;