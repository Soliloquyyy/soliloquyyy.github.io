import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const TitleHeaderWrapper = props => {
		const flexboxStyle = {
			backgroundColor: "#00008B",
			width: "50%",
		};

		return (
			<div className= "position-relative p-4 d-flex rounded align-self-center text-center justify-content-center" style = {flexboxStyle}> 
					{props.children}
			</div>


		);
};

export default TitleHeaderWrapper;