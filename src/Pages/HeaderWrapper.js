import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const HeaderWrapper = props => {
	return (
		<div className= "position-relative p-3 d-flex h4 font-weight-bold"> 
					{props.children}
		</div>
	);
};

export default HeaderWrapper;