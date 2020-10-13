import React from "react";



const AbsoluteWrapper = ({ children }) => {
	const backgroundStyle = {
        backgroundColor: "#282c34",
        color: 'white',
        width: '100%',
        height: '100%',
	};
  return (
  			<div className="position-absolute " style={backgroundStyle}>
  				{children}
  			</div>
  	);
};

export default AbsoluteWrapper;
