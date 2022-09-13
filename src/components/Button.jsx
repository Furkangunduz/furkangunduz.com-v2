import React from 'react';

function Button({ children, href = '', downloadable = false }) {
	return (
		<a href={href} download={downloadable}>
			<button className='text-white/90 whitespace-nowrap bg-buttonBg px-3 border-[2px] border-black py-3 rounded-md hover:scale-[1.1] hover:-translate-y-3 transition-all duration-[300ms]'>
				{children}
			</button>
		</a>
	);
}

export default Button;
