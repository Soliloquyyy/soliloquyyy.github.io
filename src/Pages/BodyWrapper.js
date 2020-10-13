import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const BodyWrapper = props => {
	return (
		<div className= "position-relative p-4 d-flex rounded h5"> 
					{props.children}
		</div>
	);
};

export default BodyWrapper;