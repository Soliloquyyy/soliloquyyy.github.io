import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const TitleWrapper =  props  => {
	const flexboxStyle = {
		backgroundColor: "#708090",
		width: "50%",
	};

	return (
		<div className= "position-relative p-2 d-flex flex-column border-dark rounded" style = {flexboxStyle}> 
			<h1> 
				<NavLink exact to={props.link}>
					{props.children[0]}
				</NavLink>
				
			</h1>
			<p> 
				{props.children[1]}
			</p>
		</div>



	)
};

export default TitleWrapper;
