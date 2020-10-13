import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const HeaderWrapper = props => {
	return (
		<div className= "position-relative p-3 d-flex rounded h4"> 
					{props.children}
		</div>
	);
};

export default HeaderWrapper;