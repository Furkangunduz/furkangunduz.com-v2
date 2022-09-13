import React from 'react';

function Button({ children }) {
	return (
		<button className='text-buttonText whitespace-nowrap bg-buttonBg px-3 py-3 rounded-md'>
			{children}
		</button>
	);
}

export default Button;
