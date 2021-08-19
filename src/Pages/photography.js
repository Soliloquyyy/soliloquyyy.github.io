import React from 'react';
import AbsoluteWrapper from "./AbsoluteWrapper";
import ImageNavWrapper from "./ImageNavWrapper";
import ListWrapper from "./ListWrapper";
import TitleWrapper from "./TitleWrapper";

function Photography() {
	const flexboxStyle = {
		backgroundColor: "#708090",
		width: "50%",
	};
	const fSize = (window.innerWidth <= 760) ? "100%" : "200%"
	const sty  = {
		fontSize: fSize,
	}
	const fSize2 = window.innerWidth <= 760 ? "50%" : "100%";
	const sty2 = {
		fontSize: fSize2,
	}

    return (
    	<AbsoluteWrapper>
			<ListWrapper>
					<div className= "position-relative p-2 d-flex flex-column border-dark rounded" style = {flexboxStyle}> 
						<h1 style = {sty} className="text-center mx-auto m-1">
							Under Construction
						</h1>
					</div>
				</ListWrapper>
		</AbsoluteWrapper>
    );
};

export default Photography;