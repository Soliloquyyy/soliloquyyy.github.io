import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const ImageNavWrapper = props => {
	return (
		<NavLink exact to={props.link}
			className="nav-item nav-link d-inline-block float-left" 
			activeClassName= "nav-item nav-link active d-inline-block">
				<button class = "btn btn-info btn-lg"> 
					{props.children}
				</button> 
		</NavLink>



	)
};

export default ImageNavWrapper;
