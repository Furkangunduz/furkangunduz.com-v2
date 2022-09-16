import { useEffect } from 'react';
import { useScreenSize } from '../hooks/useScreenSize';

import FirstView from '../components/FirstView';
import Button from '../components/Button';

import useHover from '../hooks/useHover';
//pictures
import myPicture from '../images/personal-photo.jpg';
import MernStack from '../images/mernstack.png';
//content
import { techImages, reachMeImagesAndLinks, AboutMeTexts } from '../data';

function AboutMe() {
	const [isHovering, handleMouseOver, handleMouseOut] = useHover();
	const [screenSize, handleWindowSizeChange] = useScreenSize(window);

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
	}, []);

	const isMobile = screenSize < 720;

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className={`w-[50%] hover:w-[90%] bg-primary text-black relative h-screen transition-all duration-500 scroll-smooth overflow-y-auto overflow-x-hidden  `}>
			{!isHovering ? (
				<FirstView text='About me' />
			) : (
				<div className=' text-left flex group relative flex-col items-center justify-center pt-10'>
					<div className='w-[90%] transition-opacity duration-[1200ms] ease-in-out opacity-0 group-hover:opacity-100  flex items-center gap-10 py-5 px-5 rounded-xl bg-primary-section-shadow '>
						<img
							className='w-[35%] border-black shadow-2xl ml-2 rounded-lg'
							src={myPicture}
							alt=''
						/>
						<div className='flex flex-col gap-10 transition-opacity duration-[1200ms] ease-in-out opacity-0 group-hover:opacity-100'>
							<p className='py-2 px-1 font-bold '>{AboutMeTexts[0]}</p>
							<div className='flex gap-4 font-semibold'>
								<Button href='https://drive.google.com/file/d/1CC9MUipcXS49MmfGHL1gWHVgxnQl11wh/view?usp=sharing'>
									See My Resume
								</Button>
								<Button href='#reach-me'>Reach me</Button>
								{isMobile && (
									<Button href='#projects'>See my projects</Button>
								)}
							</div>
						</div>
					</div>

					<div className='my-24 w-[90%] relative  px-5 py-6 flex items-center gap-24 text-xl rounded-xl bg-primary-section-shadow transition-opacity duration-[1200ms] ease-in-out opacity-0 group-hover:opacity-100'>
						<p className='leading-7 w-[50%]'>
							{AboutMeTexts[1]}
							<span className='absolute w-20 h-20'>
								{
									<img
										className='w-20 inline-block'
										src={MernStack}
										alt=''
									/>
								}
							</span>
						</p>
						<div className='grid grid-cols-4 gap-x-9 gap-y-4 '>
							{techImages.map((image, index) => (
								<img key={index} src={image} className='w-10 h-10' alt='' />
							))}
						</div>
					</div>
					<div
						id='reach-me'
						className='w-[90%] rounded-xl bg-primary-section-shadow mb-10 transition-opacity duration-[1200ms] ease-in-out opacity-0 group-hover:opacity-100'>
						<div className='w-full flex justify-center gap-16 my-12 '>
							{reachMeImagesAndLinks.map(([image, link], index) => (
								<a key={index} href={link}>
									<img src={image} className='w-10 h-10' alt='' />
								</a>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default AboutMe;
