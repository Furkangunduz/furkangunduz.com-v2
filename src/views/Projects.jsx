import FirstView from '../components/FirstView';
import ProjectCard from '../components/Projects/ProjectCard';
import useHover from '../hooks/useHover';

import { projectsCardInfos } from '../data';

function Projects() {
	const [isHovering, handleMouseOver, handleMouseOut] = useHover();
	return (
		<div
			className={` w-[50%] hover:w-[90%] bg-secondary text-textColor relative h-full transition-all duration-500 scroll-smooth `}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}>
			{!isHovering ? (
				<FirstView text='See my projects' />
			) : (
				<div className='w-[100%] h-screen group flex items-center flex-col overflow-auto gap-12 pt-12 pb-24'>
					<div className='flex flex-col w-[75%] transition-opacity duration-[800ms] ease-in-out opacity-0 group-hover:opacity-100'>
						{projectsCardInfos.map(
							(
								{ name, images, tags, description, demoLink, sourceLink },
								index
							) => (
								<ProjectCard
									key={index}
									name={name}
									images={images}
									tags={tags}
									description={description}
									demoLink={demoLink}
									sourceLink={sourceLink}
								/>
							)
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default Projects;
