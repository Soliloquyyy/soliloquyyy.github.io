import React, { Component } from "react";

const ListWrapper = props => {
	const style = {
		margin: '1rem',
	}
	return (
		<div class = "position-relative d-flex flex-column border-dark justify-content-around">
			<div class = "position-relative p-2 d-flex flex-row justify-content-center" style={style}> 
				{props.children} 
			</div>
		</div>
	)
};

export default ListWrapper;
