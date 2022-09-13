function FirstView({ text }) {
	return (
		<div className='absolute top-0 w-full h-full grid place-content-center'>
			<h1 className='font-semibold text-3xl line tracking-wider'>{text}</h1>
		</div>
	);
}

export default FirstView;
