import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const ContentWrapper = props => {
		const flexboxStyle = {
			backgroundColor: "#708090",
			width: "55%",
		};

		return (
			<div className= "position-relative p-2 d-flex flex-column border-dark rounded h3" style = {flexboxStyle}> 
				{props.children}
			</div>


		);
};

export default ContentWrapper;