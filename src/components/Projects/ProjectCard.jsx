import { Carousel } from 'react-responsive-carousel';
import Button from '../Button';

function ProjectCard({ name, tags, description, demoLink, sourceLink, images }) {
	return (
		<div>
			<div className='relative text-center rounded-t-lg overflow-x-hidden bg-white/50 mt-10 '>
				<Carousel>
					{images.map((image, index) => (
						<img key={index} className='W-full rounded-t-lg' src={image}></img>
					))}
				</Carousel>
			</div>
			<div className='w-[100%] bg-white px-4 pt-7 pb-6 rounded-b-lg'>
				<div className='w-[100%] flex flex-col justify-between items-center gap-5 '>
					<a href='https://github.com/Furkangunduz/Bilet-Buldum'>
						<h2 className='font-semibold text-2xl'>{name}</h2>
					</a>
					<div className='flex gap-2'>
						{tags.map((tag, index) => (
							<p
								key={index}
								className='px-8 py-2 text-center text-white/90 font-semibold bg-tagBg backdropbackdrop-blur-lg whitespace-nowrap rounded-lg'>
								{tag}
							</p>
						))}
					</div>
				</div>

				<div className='flex flex-col mt-5'>
					<div className='flex gap-5'>
						<p
							className='text-lg px-4 py-10 bg-secondary-section-shadow rounded-xl'
							dangerouslySetInnerHTML={{ __html: description }}></p>
					</div>
					<div className='w-full flex justify-center items-center gap-5 whitespace-nowrap mt-10'>
						<Button href={sourceLink}>Source code</Button>
						<Button href={demoLink}>Live demo</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
