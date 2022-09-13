import React from 'react';

function Button({ children, href = '', downloadable = false }) {
	return (
		<a href={href} download={downloadable}>
			<button className='text-buttonText whitespace-nowrap bg-buttonBg px-3 py-3 rounded-md hover:scale-[1.1] hover:-translate-y-3 transition-all duration-[300ms]'>
				{children}
			</button>
		</a>
	);
}

export default Button;
