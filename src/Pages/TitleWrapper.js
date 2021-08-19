import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const TitleWrapper =  props  => {
	let widthBool = window.innerWidth <= 760 ? true : false
	const fSize = widthBool  ? "120%" : "200%";
	const fSize2 = widthBool  ? "70%" : "100%";
	const boxSize = widthBool ? "90%" : "80%";
	const titleStyle = {
		fontSize: fSize,
	};
	const desStyle = {
		fontSize: fSize2,
	};
	const flexboxStyle = {
		backgroundColor: "#708090",
		width: boxSize,
	};

	return (
		<div className= "position-relative p-2 d-flex flex-column border-dark rounded" style = {flexboxStyle}> 
			<h1 style={titleStyle}> 
				<NavLink exact to={props.link} >
					{props.children[0]}
				</NavLink>
				
			</h1>
			<p style={desStyle}> 
				{props.children[1]}
			</p>
		</div>



	)
};

export default TitleWrapper;
